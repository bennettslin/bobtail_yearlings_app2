import React from 'react'
import cx from 'classnames'
import Page from '../../containers/Page'
import Heading from '../../components/Heading'

const Essays = () => (
    <Page
        {...{
            className: cx(
                'Essays'
            ),
        }}
    >
        <Heading>Essays</Heading>
    </Page>
)

export default Essays
