import { GA_ACCOUNT } from './src/constants/analytics'

export default {
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-remove-trailing-slashes`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Bobtail Yearlings`,
                short_name: `Bobtail Yearlings`,
                description: 'Website for the band Bobtail Yearlings',
                start_url: '/',
                // TODO: With access to Illustrator again.
                background_color: '#fff',
                theme_color: '#fff',
                display: 'standalone',
                icon: 'src/assets/favicon/bobtailYearlings.png'
            }
        },
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                google: {
                    families: [
                        'Rancho',
                        'PT Sans Narrow'
                    ]
                }
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: GA_ACCOUNT
            }
        }
    ]
}
