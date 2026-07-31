var config = {}
config.mongoURI = {
    production: 'mongodb+srv://allan:Allan254@cluster0.ipsnhmp.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster0',
    development: 'mongodb+srv://allan:Allan254@cluster0.ipsnhmp.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=Cluster0',
    test: 'mongodb+srv://allan:Allan254@cluster0.ipsnhmp.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=Cluster0',
}
module.exports = config;