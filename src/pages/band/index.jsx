import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            body: `
**Bennett Lin** (he/him)${'  '}
lead vocal, guitar

**Chris Kouldukis** (he/him)${'  '}
backing vocal, bass

**Tai Taitano** (he/him)${'  '}
drums
            `,
        }}
    />
)

export default Component
