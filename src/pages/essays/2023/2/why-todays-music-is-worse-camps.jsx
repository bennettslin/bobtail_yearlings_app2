import React from 'react'
import Page from '../../../../containers/Page'
import { pagesMap } from '../../../../content/essays/2023'

const id = 'why-todays-music-is-worse-camps'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: `
*TODO: This is a work in progress.*
    `,
        }}
    />
)

export default Component
