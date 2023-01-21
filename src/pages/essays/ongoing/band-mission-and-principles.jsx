import React from 'react'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/essays/ongoing'

const id = 'band-mission-and-principles'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: `
### Our mission

**The Bobtail Yearlings are committed to being the most historically consequential rock band of the 21st century! We'll do so by embodying the core values of interdependence and self-sacrifice while amassing a solid body of creative works.**

### Our guiding principles

##### Historical consequence

##### Interdependence

Blah

##### Emotional intelligence

Blah

##### Member compensation

Blah

##### Member responsibilities

Blah

##### Admin

##### Future growth

##### Self-sacrifice

Blah
    `,
        }}
    />
)

export default Component
