import React from 'react'
import Page from '../../containers/Page'
import Heading from '../../components/Heading'
import Markdown from '../../components/Markdown'
import ContactEmail from '../../components/ContactEmail'
import content from '../../content/band'
import { BAND_PAGE } from '../../constants/pages'

const Band = () => (
    <Page {...{ page: BAND_PAGE }}>
        <Heading>Band</Heading>
        <Markdown>{content}</Markdown>
        <ContactEmail />
    </Page>
)

export default Band
