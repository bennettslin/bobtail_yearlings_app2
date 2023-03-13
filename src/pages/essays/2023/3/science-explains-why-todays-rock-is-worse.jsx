import React from 'react'
import Page from '../../../../containers/Page'
import { pagesMap } from '../../../../content/essays/2023'

const id = 'science-explains-why-todays-rock-is-worse'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: `
Is rock worse in our time than it was in the past? Well, that's really for future generations to decide, but I suspect they'll say yes. And that's because while art is subjective, systems are objective. And every future historian will need to acknowledge three things about the current indie system.

### Creativity is counterintuitive

First, scientists pretty much all agree that creativity is counterintuitive. We reject creative ideas, but not because we dislike creativity itself; it's because we don't recognize them for what they are. Our intuition tells us that the creative ideas of our time will resemble those of the past.

### The indie system treat creativity as intuitive

### The past two decades of indie rock were chosen by this dysfunctional system
    `,
        }}
    />
)

export default Component
