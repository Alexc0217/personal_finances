const database = require("../../models");
const { Op } = require("sequelize");

class BoxController {
  static async create(req, res) {
    try{
      const box = {boxName: req.body.boxName, value: req.body.value, userId: req.params.user_id}
      const account = await database.Account.findOne({where: {userId: req.params.user_id}});

      if(req.body.value < 100){
        return res.status(400).json({message: "You need have 100 R$ to create a box."})
      }

      if(account.totalValue >= req.body.value){
        await database.Box.create(box).then((result) => {
          return res.status(200).json({message: "created"});
        })
      }else{
        return res.status(400).json({message: "you do not have the value entered."})
      }

    }catch(err){
      res.status(500).json(err.message);
    }
  }

  static async myBoxes(req, res) {
    try {
      const boxes = await database.Box.findAll({where: {userId: req.params.user_id}})
      return res.status(200).json(boxes);
    }catch(err) {
      res.status(500).json(err.message);
    }
  }

  static async updateValue(req, res) {
    const value = req.body.value;
    const account = await database.Account.findOne({where: {userId: req.params.user_id}})

    if(account.totalValue >= value){
      try {
        const box = await database.Box.findOne({where: {id: req.params.box_id}});
        const newValue = account.totalValue + value;
        await box.update({value: newValue}).then((result) => {
          return res.status(201).json({message: "success."});
        }).catch((err) => {
          return res.status(400).json(err)
        })
      }catch(err) {
        return res.status(400).json(err)
      }
    }else{
      return res.status(400).json({message: "You don't have required amount to do this."})
    }
  }


}

module.exports = BoxController;