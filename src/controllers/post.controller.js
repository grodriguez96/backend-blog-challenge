import createPost from './postDao/create.post.js';
import getAllPost from './postDao/getAll.post.js';
import getIdPost from './postDao/getId.post.js';
import updatePost from './postDao/update.post.js';


/** Create new post. */
export const create = createPost;

/** Get all posts. */
export const getAll = getAllPost;

/**Get post by id */
export const getById = getIdPost;

/** Update post by id */
export const update = updatePost;
