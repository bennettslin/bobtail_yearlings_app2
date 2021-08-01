import React from 'react'
import Page from '../../../containers/Page'
import EssayBody from '../../../containers/Page/EssayBody'
import Heading from '../../../components/Heading'
import content from '../../../content/essays/2021/7-old-links'

export const OLD_LINKS_HEADING = `Old links`

const OldLinks = () => (
    <Page {...{ content, title: OLD_LINKS_HEADING }}>
        <Heading>{OLD_LINKS_HEADING}</Heading>
        <EssayBody {...{ month: 7, year: 2021 }}>{content}</EssayBody>
    </Page>
)
export default OldLinks
