/* eslint-disable react/prop-types */
import React from 'react'
import path from 'path'

export default {
    Document: ({
        Html,
        Head,
        Body,
        children
    }) => (
        <Html lang="en-US">
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-133481555-3"></script>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Bobtail Yearlings</title>
            </Head>
            <Body>
                {children}
            </Body>
        </Html>
    ),
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
