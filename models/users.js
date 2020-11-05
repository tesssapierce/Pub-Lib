module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
       user_id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true
       },
     
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [5,12]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail:true
        }
      },
    
      zipcode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [5]
      }
    },
      about_me: {
        type: DataTypes.STRING
    },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5,12]
      }
    },
    
  });
    return User;
  
    };
  