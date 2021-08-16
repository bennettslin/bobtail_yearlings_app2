import React from 'react'
import Page from '../../../containers/Page'
import EssayBody from '../../../containers/Page/EssayBody'
import content, { title } from '../../../content/essays/2021/7-31-old-links'

const OldLinks = () => (
    <Page {...{ content, title }}>
        <EssayBody
            {...{
                title,
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
