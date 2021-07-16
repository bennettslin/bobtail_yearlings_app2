import React from 'react'
import Page from '../../containers/Page'
import Heading from '../../components/Heading'
import { CONTACT_PAGE } from '../../constants/pages'

const Contact = () => (
    <Page {...{ page: CONTACT_PAGE }}>
        <Heading>Contact</Heading>
    </Page>
)

export default Contact
