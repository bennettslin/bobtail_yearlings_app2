import React from 'react'
import Page from '../../../containers/Page'
import EssayBody from '../../../containers/Page/EssayBody'
import content, { heading } from '../../../content/essays/2021/7-31-old-links'

const OldLinks = () => (
    <Page {...{ content, title: heading }}>
        <EssayBody
            {...{
                title: heading,
                year: 2021,
                month: 7,
                day: 31,
            }}
        >
            {content}
        </EssayBody>
    </Page>
)
export default OldLinks
