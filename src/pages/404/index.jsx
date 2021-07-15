import React from 'react'
import cx from 'classnames'
import Page from '../../containers/Page'
import Heading from '../../components/Heading'

const NotFound = () => (
    <Page
        {...{
            className: cx(
                'NotFound',
            ),
        }}
    >
        <Heading>Page Not Found</Heading>
    </Page>
)

export default NotFound
