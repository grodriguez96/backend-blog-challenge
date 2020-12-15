
export default (Sequelize, sequelize) => {

    const post = sequelize.define('post', {

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
        categId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        }
    });
    return post;
}