import React from 'react'
import Page from '../../containers/Page'
import Body from '../../containers/Page/Body'
import Heading from '../../components/Heading'
import Anchor from '../../components/Anchor'

const Essays = () => (
    <Page>
        <Heading>Essays</Heading>
        <Body isParentBody>
            <Heading isBodyHeading {...{ level: 5 }}>2021</Heading>
            <Anchor {...{ to: '2021/7-past-links' }}>
                Past links
            </Anchor>
        </Body>
    </Page>
)
export default Essays
