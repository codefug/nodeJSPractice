const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initiate(sequelize) {
    post.init({
        content:{
            type:Sequelize.STRING(140),
            allowNull:false,
        },
        img: {
            type: Sequelize.STRING(200),
            allowNull:true,
        }
    },{
        sequelize,
        timestamps:true,
        underscored:false,
        paranoid: false,
        modelName: 'Post',
        tableName: 'posts',
        charset:'utf8mb4',
        collate: 'utf8mb4_general_ci'
    })
  }
  static associate(db) {}
}

module.exports = User;
