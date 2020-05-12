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
        [
            /**
             * This plugin rebuilds the favicon assets every single time, so
             * it's less than ideal.
             */
            'react-static-plugin-favicons',
            {
                inputFile: path.resolve('./src/assets/images/bobtailYearlings.png'),
                outputDir: 'dist/static',
                configuration: {
                    icons: {
                        // Need to list all favicons.
                        android: false,
                        appleIcon: false,
                        appleStartup: false,
                        coast: false,
                        favicons: true,
                        firefox: false,
                        windows: false,
                        yandex: false
                    }
                }
            }
        ],
        require.resolve('react-static-plugin-reach-router'),
        require.resolve('react-static-plugin-sitemap'),
        'react-static-plugin-sass'
    ]
}
