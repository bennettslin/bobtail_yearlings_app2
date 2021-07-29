import React from 'react'
import Page from '../../containers/Page'
import MarkdownBody from '../../containers/Page/MarkdownBody'
import Heading from '../../components/Heading'
import ContactEmail from '../../components/ContactEmail'
import content from '../../content/contact'

const Contact = () => (
    <Page>
        <Heading>Contact</Heading>
        <MarkdownBody>{content}</MarkdownBody>
        <ContactEmail />
    </Page>
)

export default Contact
