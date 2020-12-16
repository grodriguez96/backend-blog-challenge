import db from '../../models/index.js'

const Post = db.posts;

export default (req, res) => {

    /** Get all posts for the database. */

    Post.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving posts."
            });
        });
}