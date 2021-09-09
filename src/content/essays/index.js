import { pages as pages2021 } from './2021/map'
import { getMarkdownLinksForEssaysPages } from './helper'

export default {
    title: `Essays`,
    body: `
### 2021
${getMarkdownLinksForEssaysPages(pages2021)}
    `,
}
