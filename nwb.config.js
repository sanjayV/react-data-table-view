module.exports = {
    type: 'react-app',
    npm: {
        umd: {
            global: 'ReactSomeComponent',
            externals: {
                'react': 'React'
            }
        }
    }
}
