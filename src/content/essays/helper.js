import { getMarkdownLinksForPages } from '../../utils/format/markdown'
import { ESSAYS_PAGE } from '../../constants/pages'

export const getMarkdownLinksForEssaysPages = pages => (
    getMarkdownLinksForPages({
        rootPage: ESSAYS_PAGE,
        pages,
    })
)
