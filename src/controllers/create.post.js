import db from '../models/index.js'

const Post = db.posts;
const Op = db.Sequelize.Op;

export default (req, res) => {

    /** Validate requests */

    if (!req.body.title) {
        res.status(400).send({
            message: "Title can not be empty!"
        });
        return;
    }
    else if (!req.body.content) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    else if (!req.body.image) {
        res.status(400).send({
            message: "Image can not be empty!"
        });
        return;
    } else if (!req.body.categoryId) {
        res.status(400).send({
            message: "Category can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const post = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        categoryId: req.body.categoryId
    };

    // Save Tutorial in the database
    Post.create(post)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Post."
            });
        });
}