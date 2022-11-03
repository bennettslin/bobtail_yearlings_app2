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

A long time ago, a friend showed me the album he'd made with his band while in high school. When I asked where he expected it to go in fifty years, he replied, "Why would I care?" This floored me. As someone who grew up on Beethoven and the Beatles, I just assumed that we all make music for posterity— some, like myself, are just more committed to succeeding than others.

But my friend clued me in on another attitude. Others saw making music as just a way to express themselves, to hang out with friends and feel alive. The professional look of the CD just added to the fun, not a signal of serious intent. And, of course, the joke was on me. Indie culture is all about celebrating and elevating artists like my friend, while ignoring artists like me.

And the historical record seems to support the indie mentality. Up until this point, every rock artist we love is someone who just did things their own way, without thought for posterity. They made it in history precisely because they *didn't* care to make history.

Yet after twenty years of indie culture reigning supreme, yet mattering very little in the long term, I suspect that the younger generation is now willing to agree with me: Yes, rock artists once made history without caring to do so, but the terms have now changed. Making history is still possible, but it will only ever done by those consciously trying to make history.

But what does it mean to make history? As someone who's been thinking about it all my life, here are my guesses.

Using as an example Yearling's Bobtail, my audio webcomic for the Ulysses of rock albums. Obviously, no one today even knows about YB, so I'm not using it as an example that has succeeded. I'm just using it as an example of what someone who thinks the way I do would create, based on this very thinking.

### A is for academic

It can be taught by the academy.
Yearling's Bobtail.

But anything that can be taught will eventually be institutionalized by the academy, even if it's considered too low-brow by today's standards. Jazz is the obvious example.
So if as an artist, you want to study it for the benefit of your own self-education, it also counts.
In other words, when I would rewind a Def Leppard tape or a Nirvana CD to figure out what they were doing.

### E is for enjoyable

Enjoyable for others.

Enjoyable for self.
I may ruin a song with obtuse lyrics. But at its core, every song I've ever written, at its core, is a melody and chord progression that I enjoy just humming and strumming, and just working on as it stays in this stage for months, and even years.
Just paying attention to the interplay, as the melody and chords push and pull away from each other.

### I is for inspiring

I've never inspired anyone in my life.

### O is for original

Nothing that has to do with how music is marketed or distributed will matter to history.

Can't be commissioned.

### U is for universal

Speaks to the universal human experience.
    `,
        }}
    />
)

export default Component
