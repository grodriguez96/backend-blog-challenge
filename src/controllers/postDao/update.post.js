import db from '../../models/index.js'

const status = {
    SUCCESS: 1,
    FAILURE: 0
}

const Post = db.posts;

export default (req, res) => {

    /** Update post by id. */
    const id = req.params.id;

    Post.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == status.SUCCESS) {
                res.send({
                    message: "Post was updated successfully."
                });
            } else {
                res.send({
                    message: "Cannot update Post with id = " + id
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Post with id=" + id
            });
        });
}