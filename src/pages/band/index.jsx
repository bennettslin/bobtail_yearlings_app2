import React from 'react'
import Page from '../../containers/Page'
import Body from '../../containers/Page/Body'
import content from '../../content/band'

const Band = () => (
    <Page>
        <Body {...content} />
    </Page>
)

export default Band
