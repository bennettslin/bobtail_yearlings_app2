import React from 'react'
import Page from '../../../containers/Page'
import Markdown from '../../../containers/Markdown'
import Heading from '../../../components/Heading'
import content from '../../../content/essays/2021/7-past-links'

const PastLinks = () => (
    <Page>
        <Heading>Past links</Heading>
        <Markdown isEssayPage>{content}</Markdown>
    </Page>
)
export default PastLinks
