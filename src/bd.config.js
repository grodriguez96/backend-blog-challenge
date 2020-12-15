const databaseConfig = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DATABASE: 'blog',
    dialect: 'mysql',

    /** pool is optional, it will be used for Sequelize connection pool configuration. */

    /*    pool: {
            max: 5, // maximum number of connection in pool.
            min: 0, // minimum number of connection in pool.
            acquire: 3000, // maximum time, in milliseconds, that pool will try to get connection before throwing error.
            idle: 1000 // maximum time, in milliseconds, that a connection can be idle before being released.
    
        }
    */
};

export default databaseConfig;