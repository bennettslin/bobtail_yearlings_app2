import React from 'react'
import content from '../../../content/essays/2021/7-31'
import Page from '../../../containers/Page'
import Body from '../../../containers/Page/Body'
import MultiPageFooter from '../../../components/MultiPageFooter'
import { ESSAYS_PAGE } from '../../../constants/pages'

const Essay210731 = () => (
    <Page>
        <Body {...content} />
        <MultiPageFooter {...{ backPage: ESSAYS_PAGE }} />
    </Page>
)

export default Essay210731
