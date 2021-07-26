import React from 'react'
import Page from '../../containers/Page'
import Heading from '../../components/Heading'
import Markdown from '../../containers/Markdown'
import ContactEmail from '../../components/ContactEmail'
import content from '../../content/contact'

const Contact = () => (
    <Page>
        <Heading>Contact</Heading>
        <Markdown>{content}</Markdown>
        <ContactEmail />
    </Page>
)

export default Contact
