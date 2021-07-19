module.exports = {
    development: {
        port: process.env.PORT || 3000,
        dbPath: 'mongodb+srv://admin:admin12345@cluster0.1m0tq.mongodb.net/Cluster0?retryWrites=true&w=majority'
    },
    production: {}
};