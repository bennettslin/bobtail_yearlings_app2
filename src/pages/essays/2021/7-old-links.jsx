import React from 'react'
import Page from '../../../containers/Page'
import Markdown from '../../../containers/Markdown'
import Heading from '../../../components/Heading'
import content from '../../../content/essays/2021/7-old-links'

const OldLinks = () => (
    <Page>
        <Heading>Old links</Heading>
        <Markdown isEssayPage>{content}</Markdown>
    </Page>
)
export default OldLinks
