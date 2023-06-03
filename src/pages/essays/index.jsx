import React from 'react'
import Page from '../../containers/Page'
import { getMarkdownLinksForRootPage } from '../../utils/format/markdown'
import { pagesList } from '../../content/essays'
import { ESSAYS_PAGE } from '../../constants/pages'

const Component = () => (
    <Page
        {...{
            metaDescription: `Various writings over the years.`,
            body: getMarkdownLinksForRootPage({
                topLevelPage: ESSAYS_PAGE,
                pagesList,
            }),
        }}
    />
)

export default Component
