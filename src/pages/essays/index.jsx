import React from 'react'
import Page from '../../containers/Page'
import Body from '../../containers/Page/Body'
import Heading from '../../components/Heading'
import Anchor from '../../components/Anchor'

const Essays = () => (
    <Page>
        <Heading>Essays</Heading>
        <Body isParentBody>
            <Heading isBodyHeading {...{ level: 3 }}>2021</Heading>
            <Anchor {...{ pageLink: 'essays/2021/7-old-links' }}>
                Old links
            </Anchor>
        </Body>
    </Page>
)
export default Essays
