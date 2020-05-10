import React from 'react'
import PropTypes from 'prop-types'

import './scss/style.scss'

const Document = ({
    Html,
    Head,
    Body,
    children
}) => (
    <Html lang="en-US">
        <Head>
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-133481555-3"
            />
            <meta
                charSet="UTF-8"
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <title>Bobtail Yearlings</title>
        </Head>
        <Body>
            {children}
        </Body>
    </Html>
)

Document.propTypes = {
    Html: PropTypes.func.isRequired,
    Head: PropTypes.func.isRequired,
    Body: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default Document
