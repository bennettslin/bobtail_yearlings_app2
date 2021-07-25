import React from 'react'
import Page from '../../containers/Page'
import Heading from '../../components/Heading'
import Markdown from '../../components/Markdown'
import ContactEmail from '../../components/ContactEmail'
import content from '../../content/contact'
import { CONTACT_PAGE } from '../../constants/pages'

const Contact = () => (
    <Page {...{ page: CONTACT_PAGE }}>
        <Heading>Contact</Heading>
        <Markdown>{content}</Markdown>
        <ContactEmail />
    </Page>
)

export default Contact
