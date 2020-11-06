 const Sequelize = require('sequelize') 
// const sequelize = require('../config/config.json') 
// const User = require('./models/users') 
 //sequelize.sync({force:true}); 
 const path = 'mysql://root:root2@localhost:3306/library';
 const sequelize = new Sequelize(path, {
  operatorsAliases: false
});

// module.exports = function(sequelize, DataTypes) {
    let User = sequelize.define("User", {
       user_id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true
       },
     
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [5,12]
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail:true
        }
      },
    
      zipcode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          len: [5]
      }
    },
      about_me: {
        type: Sequelize.STRING
    },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [5,12]
      }
    },     
  });


  User.sync().then(() => {
    console.log('New table created');
}).finally(() => {
    sequelize.close();
})






  module.exports = User

 