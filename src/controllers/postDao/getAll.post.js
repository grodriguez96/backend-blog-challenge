import db from '../../models/index.js'

const Post = db.posts;

export default (req, res) => {

    /** Get all posts for the database. */

    Post.findAll()
        .then(data => {
            const sortByDate = data.sort(function (a, b) {
                /** Turn your strings into dates, and then subtract them
                /* to get a value that is either negative, positive, or zero. */
                return new Date(b.createdAt) - new Date(a.createdAt);
            });;
            res.send(sortByDate);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving posts."
            });
        });
}