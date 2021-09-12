import { getPageElementForConfig } from '../../containers/Page'
import { getMarkdownLinksForRootPage } from '../../utils/format/markdown'
import { pagesList } from '../../content/essays'
import { ESSAYS_PAGE } from '../../constants/pages'

export default getPageElementForConfig({
    body: getMarkdownLinksForRootPage({
        topLevelPage: ESSAYS_PAGE,
        pagesList,
    }),
})
