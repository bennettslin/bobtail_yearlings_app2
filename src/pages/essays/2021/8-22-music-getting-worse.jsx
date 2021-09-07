import React from 'react'
import content from '../../../content/essays/2021/8-22'
import Page from '../../../containers/Page'
import Body from '../../../containers/Page/Body'
import MultiPageFooter from '../../../components/MultiPageFooter'
import { ESSAYS_PAGE } from '../../../constants/pages'

const Essay210822 = () => (
    <Page>
        <Body {...content} />
        <MultiPageFooter {...{ backPage: ESSAYS_PAGE }} />
    </Page>
)

export default Essay210822
