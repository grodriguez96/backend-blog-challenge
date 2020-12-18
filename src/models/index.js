import Sequelize from "sequelize";
import post from "./post.model.js";
import databaseConfig from "../../config/bd.config.js";

const sequelize = new Sequelize(
  databaseConfig.DATABASE,
  databaseConfig.USER,
  databaseConfig.PASSWORD,
  {
    host: databaseConfig.HOST,
    dialect: databaseConfig.DIALECT,
    operatorsAliases: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posts = post(sequelize, Sequelize);

export default db;
