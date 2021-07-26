import React from 'react'
import Page from '../../containers/Page'
import Markdown from '../../containers/Markdown'
import Heading from '../../components/Heading'
import ContactEmail from '../../components/ContactEmail'
import content from '../../content/band'

const Band = () => (
    <Page>
        <Heading>Band</Heading>
        <Markdown>{content}</Markdown>
        <ContactEmail />
    </Page>
)

export default Band
