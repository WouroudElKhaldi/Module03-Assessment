import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      dob: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Admin",
    }
  );
  return Admin;
};
