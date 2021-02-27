import webpack from 'webpack'

export const onCreateWebpackConfig = ({ actions }) => {

    // Get primitive value of current date and time.
    const buildDateTime = new Date().valueOf()

    actions.setWebpackConfig({
        plugins: [
            // Define global constant at compile time.
            new webpack.DefinePlugin({
                BUILD_DATE_TIME: buildDateTime,
            }),
        ],
        resolve: {
            // Import from files without specifying extensions.
            extensions: ['.js', '.jsx', '.scss', '.svg'],
        },
    })
}
