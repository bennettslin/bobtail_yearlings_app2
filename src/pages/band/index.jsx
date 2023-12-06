import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            metaDescription: `A list of our band members.`,
            body: `
**Bennett Lin** (he/him)${'  '}
vocals, guitar
            `,
        }}
    />
)

export default Component
