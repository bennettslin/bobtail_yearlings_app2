import React from 'react'
import Page from '../../../../containers/Page'
import { pagesMap } from '../../../../content/essays/2023'

const id = 'the-cruelty-of-indie-how-to-guides'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: `
${'  ' || `
// TODO: Necessarily celebrates following the how-to guide.
`}

Why has indie rock made music worse? The reason is that an indie culture will always favor the artist who follows a how-to guide written by others. Let me explain.

${'  ' || `
// TODO: Make it the reverse: that they couldn't have done so on their own.
`}

If what you value most is that an artist forges a path for which no how-to guide has yet been written— as history does— then you *can't* care whether they need others to help them. Go through Rolling Stone's list of [100 greatest artists](https://www.rollingstone.com/music/music-lists/100-greatest-artists-147446), for example, and you'll notice that none of them could have succeeded on their own.

But the flip side of this observation is also true: If what you value most is that an artist succeeds on their own— as indie rock does— then you *can't* care whether they follow a how-to guide written by others. And since such how-to guides can only ever help the artists we love, we're obliged to be gracious to every tech company

As a result, the story that excites us most is when a benevolent tech company creates the ultimate how-to guide for all artists henceforth to follow.

This has two tragic consequences. First, even indie rock's innovators end up following a how-to guide written by others. Think of the most innovative indie artist out there. What makes them innovative, exactly? Perhaps they experiment with digital tools to create aural soundscapes? Well, these tools necessarily come with instruction manuals, right? In other words, *literal* guide books.

${'  ' || `
// TODO: Be more charitable.
`}

But there's no how-to guide for releasing a work like *Yearling's Bobtail*, which is why the Bobtail Yearlings have struggled to do so on our own, without the help of others. And this, in turn, is why the indie gatekeepers find it so easy to dismiss us.

But I suspect that history will treat us differently!
    `,
        }}
    />
)

export default Component
