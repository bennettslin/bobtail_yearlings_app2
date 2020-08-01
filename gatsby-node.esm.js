import webpack from 'webpack'
import format from 'date-fns/format'

export const onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        plugins: [
            // Define global constant at compile time.
            new webpack.DefinePlugin({
                BUILD_DATE_TIME: JSON.stringify(
                    `${format(new Date(), 'MMMM d, yyyy, h:mmaaaaa')}m`
                )
            })
        ],
        resolve: {
            // Import from files without specifying extensions.
            extensions: ['.js', '.jsx', '.scss', '.svg']
        }
    })
}
