import React from 'react'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/essays/ongoing'

const id = 'five-vowels-of-historical-consequence'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: `
*Updated November 2022*

### Five vowels of historical consequence

Blah
    `,
        }}
    />
)

export default Component
