import React from 'react'
import content from '../../../content/essays/2021/7-31'
import Page from '../../../containers/Page'
import MarkdownBody from '../../../containers/Page/MarkdownBody'
import MultiPageFooter from '../../../components/MultiPageFooter'
import { ESSAYS_PAGE } from '../../../constants/pages'

const Essay210731 = () => (
    <Page>
        <MarkdownBody {...content} />
        <MultiPageFooter {...{ backPage: ESSAYS_PAGE }} />
    </Page>
)

export default Essay210731
