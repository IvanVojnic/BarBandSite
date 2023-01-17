import { Sequelize } from 'sequelize';
import sequelize from '../utils/database.js';

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userEmail: {
        type: Sequelize.STRING
    },
    userInst: {
        type: Sequelize.STRING
    },
    userAge: {
        type: Sequelize.INTEGER
    },
    userSex: {
        type: Sequelize.STRING
    },
    comment: {
        type: Sequelize.STRING
    }
});
export default User;
