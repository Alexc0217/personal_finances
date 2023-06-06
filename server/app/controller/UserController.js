const database = require("../../models");
const { Op, where } = require("sequelize");
const bcrypt = require("bcrypt");


class UserController {
  static async allUsers(req, res) {
    try{
      const users = await database.User.findAll({include: ['Account', 'Boxes']});
      return res.status(200).json(users);
    }catch(err){
      res.status(500).json(err.message);
    }
  }

  static async findUser(req, res) {
    const {id} = req.params;

    try{
      const user = await database.User.findByPk(id, {include: 'Account'})
      return res.status(200).json(user);
    }catch(err){
      return res.status(400).json({err})
    }
  }

  static async create(req, res) {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(req.body.password, salt)
    const user = database.User.build({fullName: req.body.fullName, email: req.body.email, password: passwordHash, cpf: req.body.cpf });
    
    const userExist = await database.User.findAll({where: {
      [Op.or]: [
        {email: user.email},
        {cpf: user.cpf},
      ],
    }})
        
    if(userExist.length > 0){
      return res.status(400).json({message: "User EMAIL or CPF already on our database. Please try another."});
    }

    try{
      await user.save().then( async (user) => {
        const newAccount = {
          totalValue: 0,
          userId: user.id,
        }

        await database.Account.create(newAccount).then((result) => {
          return res.status(200).json({message: "Usuário criado com sucesso."});
        }).catch((err) => {
          return res.status(500).json({err});
        });
      });
    }catch(err){
      console.log(err);
      return res.status(500).json(err);
    }
  }

  static async update(req, res) {
    const {id} = req.params;
    const paramsToUpdate = req.body;
    
    try{
      const user = await database.User.findByPk(id);

      await user.update(paramsToUpdate).then((result) => {
        return res.status(200).json({message: "success"});
      }).catch((err) => {
        return res.status(400).json(err);
      })
    }catch(err){
      return res.status(404).json(err)
    }
  }

  static async login(req, res){
    const userParams = req.body;
    const email = userParams.email;
    const password = userParams.password;

    const userExist = await database.User.findOne({where: {email: userParams.email}});

    if(userExist.length < 1){
      return res.status(500).json({message: "The user email doesnt exist on our database. Create a new account."});
    }
    
    if(userExist.email === email){
      bcrypt.compare(password, userExist.password, (err, result) => {
        if(err) return res.status(404).json({message: err});
        
        if(result){
          try{
            return res.status(201).json({message: "success"});
          }catch(err){
            console.log(err);
          }
        }else{
          return res.status(401).json({message: "Password incorrect, try again."}); 
        }
      })
    }else{
      return res.status(400).json({message: "Email don't exist in our database. "});
    }

  }
}

module.exports = UserController;