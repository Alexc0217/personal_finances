const database = require("../../models");
const { Op, where } = require("sequelize");
const bcrypt = require("bcrypt");


class UserController {
  static async allUsers(req, res) {
    try{
      const users = await database.User.findAll({include: [{model: database.Account, include: 'Transactions'}, {model: database.Box}]});
      return res.status(200).json(users);
    }catch(err){
      res.status(500).json(err.message);
    }
  }

  static async findUser(req, res) {
    const {id} = req.params;

    try{
      const user = await database.User.findByPk(id, {include: [{model: database.Account, include: 'Transactions'}, {model: database.Box}]})
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
        
    if(userExist?.length > 0){
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

  static async addValue(req, res) {
    const {id} = req.params;
    const value = parseFloat(req.body.value?.replace(',', '.'));

    try{
      const account = await database.Account.findOne({where: {userId: id}});
      const newTransaction = {
        value: value,
        accountId: account.id,
        description: req.body.description,
      }

      const newTotalValue = newTransaction.value + account.totalValue;

      await database.Transaction.create(newTransaction).then( async (result) => {
        await account.update({totalValue: newTotalValue}).then((result) => {
          return res.status(200).json({message: "success"});
        }).catch((err) => {
          return res.status(400).json(err);
        })
      }).catch((err) => {
        return res.status(400).json(err);
      })

      
    }catch(err){
      return res.status(404).json(err)
    }

  }

  static async removeValue(req, res) {
    const {id} = req.params;
    const value = req.body.value;

    try{
      const account = await database.Account.findOne({where: {userId: id}});
      const newTransaction = {
        value: -value,
        accountId: account.id,
      }

      const newTotalValue = account.totalValue + newTransaction.value;

      await database.Transaction.destroy({where: { accountId: newTransaction.accountId, id: req.body.transactionId}}).then( async (result) => {
        await account.update({totalValue: newTotalValue}).then((result) => {
          return res.status(200).json({message: "success"});
        }).catch((err) => {
          return res.status(400).json(err);
        })
      }).catch((err) => {
        console.log(err);
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
    const user = await database.User.findOne({ where: { email: email
    }})

    if(userExist?.length < 1){
      return res.status(500).json({message: "The user email doesnt exist on our database. Create a new account."});
    }
    
    if(userExist?.email === email){
      bcrypt.compare(password, userExist.password, (err, result) => {
        if(err) return res.status(404).json({message: err});
        
        if(result){
          try{
            return res.status(201).json({
              message: "success",
              userId: user.id,
            });
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