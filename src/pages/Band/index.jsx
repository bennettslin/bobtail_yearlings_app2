import React from 'react'
import cx from 'classnames'
import Page from '../../containers/Page'
import Heading from '../../components/Heading'

const Band = () => (
    <Page
        {...{
            className: cx(
                'Band'
            ),
        }}
    >
        <Heading>Band</Heading>
    </Page>
)

export default Band
