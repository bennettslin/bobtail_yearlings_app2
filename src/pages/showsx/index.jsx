import React from 'react'
import cx from 'classnames'
import Page from '../../containers/Page'
import Heading from '../../components/Heading'

const Shows = () => (
    <Page
        {...{
            className: cx(
                'Shows'
            ),
        }}
    >
        <Heading>Shows</Heading>
    </Page>
)

export default Shows
