import React from 'react'
import Page from '../../../containers/Page'
import EssayBody from '../../../containers/Page/EssayBody'
import content, { title } from '../../../content/essays/2021/8-22-music-getting-worse'

const MusicGettingWorse = () => (
    <Page {...{ content, title }}>
        <EssayBody
            {...{
                title,
                year: 2021,
                month: 8,
                day: 22,
            }}
        >
            {content}
        </EssayBody>
    </Page>
)
export default MusicGettingWorse
