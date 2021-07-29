import React from 'react'
import Page from '../../../containers/Page'
import EssayBody from '../../../containers/Page/EssayBody'
import Heading from '../../../components/Heading'
import content from '../../../content/essays/2021/7-old-links'

const OldLinks = () => (
    <Page>
        <Heading>Old links</Heading>
        <EssayBody {...{ month: 7, year: 2021 }}>{content}</EssayBody>
    </Page>
)
export default OldLinks
