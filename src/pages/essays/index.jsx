import React from 'react'
import Page from '../../containers/Page'
import Body from '../../containers/Page/Body'
import Heading from '../../components/Heading'
import Essays2021 from './2021'

const Essays = () => (
    <Page>
        <Heading>Essays</Heading>
        <Body>
            <Essays2021 />
        </Body>
    </Page>
)
export default Essays
