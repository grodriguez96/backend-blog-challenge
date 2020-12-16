import db from '../../models/index.js'

const Post = db.posts;

export default (req, res) => {

    /** Get post by id. */
    const id = req.params.id;

    Post.findByPk(id)
        .then(data => {
            data
                ? res.send(data)
                : res.status(400).send({ message: " The id = " + id + " doesn't exist." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Post with id=" + id
            });
        });
}