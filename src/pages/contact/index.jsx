import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            showContactEmail: true,
            body: `
We’d love to hear from record labels and the music press, ambitious musicians and aspiring upstarts, and anyone else with an offer or opportunity for us to consider. Thanks!
            `,
        }}
    />
)

export default Component
