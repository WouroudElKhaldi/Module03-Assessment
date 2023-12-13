import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import Article from "./article.js";
import User from "./user.js";
import Admin from "./admin.js";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const UserModel = User(sequelize, Sequelize);
const AdminModel = Admin(sequelize, Sequelize);
const ArticleModel = Article(sequelize, Sequelize);

const db = {
  sequelize,
  Sequelize,
  UserModel,
  ArticleModel,
  AdminModel,
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
export default db;
