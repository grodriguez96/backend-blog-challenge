const options = {
  updatedAt: false,
};

export default function postModel(sequelize, Sequelize) {
  const post = sequelize.define(
    "post",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
      },
    },
    options
  );

  return post;
}
