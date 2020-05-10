import path from 'path'

import Document from './src/Document'

export default {
    Document,
    plugins: [
        [
            require.resolve('react-static-plugin-source-filesystem'),
            {
                location: path.resolve('./src/pages')
            }
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
        'react-static-plugin-sass'
    ]
}
