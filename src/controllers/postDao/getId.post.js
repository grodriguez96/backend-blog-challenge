import db from '../../models/index.js'

const Post = db.posts;

export default (req, res) => {

    /** Get post by id. */
    const id = req.params.id;

    Post.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Tutorial with id=" + id
            });
        });
}