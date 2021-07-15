import React from 'react'
import cx from 'classnames'
import Page from '../../containers/Page'
import Heading from '../../components/Heading'

const Contact = () => (
    <Page
        {...{
            className: cx(
                'Contact'
            ),
        }}
    >
        <Heading>Contact</Heading>
    </Page>
)

export default Contact
