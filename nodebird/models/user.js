const Sequelize = require('sequelize');

class User extends Sequelize.Model{
    static initiate(sequelize){
        User.init({
            email:{
                type:Sequelize.STRING(40),
                allowNull:true,
                unique:true,
            },
            nick:{
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            password:{
                type:Sequelize.STRING(100),
                allowNull: true,
            },
            provider:{
                type:Sequelize.ENUM('local','kakao'),
                allowNull: false,
                defaultValue: 'local'
            },
            snsId:{
                type: Sequelize.STRING(30),
                allowNull: true,
            }
        },{
            sequelize,
            timestamps: true, //createAt, updatedAt
            underscored: false,
            modelName: 'user',
            tableName: 'users',
            paranoid: true, // deletedAt 유저 삭제일 // soft delete
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }

    static associate(db){

    }
}

module.exports = User;