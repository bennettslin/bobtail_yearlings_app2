import React from 'react'
import Page from '../../containers/Page'
import { getMarkdownLinksForRootPage } from '../../utils/format/markdown'
import { pagesList } from '../../content/writings'
import { WRITINGS_PAGE } from '../../constants/pages'

const Component = () => (
    <Page
        {...{
            metaDescription: `Various writings over the years.`,
            body: getMarkdownLinksForRootPage({
                topLevelPage: WRITINGS_PAGE,
                pagesList,
            }),
        }}
    />
)

export default Component
