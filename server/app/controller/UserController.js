const database = require("../../models");

class UserController {
  static async index(req, res) {
    try{
      const users = await database.User.findAll();
      return res.status(200).json(users);
    }catch(err){
      res.status(500).json(err.message);
    }
  }
}

module.exports = UserController;