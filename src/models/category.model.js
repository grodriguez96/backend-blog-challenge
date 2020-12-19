const options = {
  updatedAt: false,
  createdAt: false,
  timestamps: false,
};

export default function categoryModel(sequelize, Sequelize) {
  const category = sequelize.define(
    "category",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    options
  );

  return category;
}
