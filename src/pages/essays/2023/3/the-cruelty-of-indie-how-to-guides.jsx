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
// TODO: Mention that *we* provide the how-to guides.
`}

Why has indie rock made music worse? One reason is that it actively *favors* the artists who follow how-to guides written by others. Let me explain.

If what you value most is that an artist forges a path for which no how-to guide has yet been written— as history does— then you *can't* care whether they rely on the help of others. Go through Rolling Stone's list of [100 greatest artists](https://www.rollingstone.com/music/music-lists/100-greatest-artists-147446), for example, and you'll notice that none of them could have succeeded on their own.

But the flip side of this is also true: If what you value most is that an artist succeeds on their own— as indie rock does— then you *can't* care whether they follow a how-to guide written by others. In fact, you'll actively encourage it. Which means you'll also subscribe to the fantasy that, one day, the *ultimate* how-to guide will come along that *every* future artist can follow.

This is why the indie crowd gets so excited when an established artist crowdfunds their album release, or an unknown artist goes viral on a streaming platform. If these were one-off events, they'd be trivial. But the hope is that they point the way for *all* future artists to do the same.

This has two unfortunate consequences. First, even indie rock's innovators end up following how-to guides written by others. For example, think of the most innovative indie artist out there. What makes them innovative? Perhaps they experiment with digital tools to create aural soundscapes? Well, these tools necessarily come with instruction manuals, right? In other words, *literal* guide books.

${'  ' || `
// TODO: Be more charitable.
`}

But the second consequence is more severe. Because the indie crowd is loyal to how-to guides, they're necessarily put off when an artist continues to go about as if all these how-to guides don't exist. And there's no greater feeling than the schadenfreude we feel when an artist chooses to sidestep xxx, only to flail as 

because it's impossible to forge an uncharted path without relying on the help of others.

${'  ' || `
// TODO: Silver lining for budding entrepreneurs.
`}

But there's no how-to guide for releasing a work like *Yearling's Bobtail*, which is why the Bobtail Yearlings have struggled to do so on our own, without the help of others. And this, in turn, is why the indie gatekeepers find it so easy to dismiss us.

But I suspect that history will treat us differently!
    `,
        }}
    />
)

export default Component
