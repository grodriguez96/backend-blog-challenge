/** Column(s) that can't be generated automatically.  */
const options = {
    updatedAt: false,
};

export default (sequelize, Sequelize) => {

    /** This Sequelize Model represents posts table in MySQL database. 
     * These columns will be generated automatically: id, title, content, image, categoryId and createdAt. */

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
        categoryId: {
            type: Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        }
    },
        options
    );
    return post;
}