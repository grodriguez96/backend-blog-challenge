import Sequelize from 'sequelize';
import databaseConfig from '../bd.config';

const sequelize = new Sequelize(databaseConfig.DATABASE, databaseConfig.USER, databaseConfig.PASSWORD, {
    host: databaseConfig.HOST,
    dialect: databaseConfig.DIALECT,
    operatorsAliases: false

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posts = import('../models/posts')(sequelize, Sequelize);

export default db;