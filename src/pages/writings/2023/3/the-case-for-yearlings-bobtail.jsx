import React from 'react'
import Page from '../../../../containers/Page'
import { pagesMap } from '../../../../content/writings/2023'

const id = 'the-case-for-yearlings-bobtail'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: `
*TODO: This is a work in progress.*

*This is for record labels or budding entrepreneurs.* (Link to Ted Gioia's article.)
https://tedgioia.substack.com/p/why-musicians-and-other-creative

###

You've just been asked to check out *Yearling's Bobtail*. You're told it's the "Ulysses of rock albums"— which means it will take hours, possibly days, to fully digest. And its audio webcomic is its own platform, so you can't neatly fit it into your music listening routine. On top of that, you've never heard of the Bobtail Yearlings! So this is all a nonstarter.

You'd be happy to hear it once there's social proof that *others* like it, however. So the obvious choice is to ignore it, and wait for a million others to discover it first. But everyone else in the world is thinking the same! So realistically, you'll never hear from this artist ever again.

###

This is because the nature of our current decentralized system is that artists need to build a fanbase on their own before anyone takes them seriously. This means that *someone* out there needs to be their first fan.

But if you think about all the artists you love, I bet you'd have to admit that for some of them, you wouldn't have been their first fan. Back when what they were doing was still too new, too different, too rough around the edges. In fact, the *more* pioneering they were, the more likely this is to be the case.

And since people are more alike than we're all willing to admit, it's likely that others would say the same about these artists. In other words, there are artists in this world whom *none* of us would want to be the first fan of— even as *millions* of us would be happy to be their millionth fan!

###

I can think of a few examples. The Black artists who pioneered rock and roll in the 50s would have met pushback had they advocated too strongly for themselves. They needed White allies to do so on their behalf.

The racial dynamics can even be reversed. While anyone could see that Eminem was immensely talented, this didn't translate into actual fandom. With Vanilla Ice having quickly become a laughingstock, the public needed social proof that it was cool to like a White rapper.

But White disc jockeys stumped for these Black pioneers, just as Dr. Dre took Eminem under his wing, so everything ended well— for them. But this kind of executive decision making made by centralized forces doesn't happen anymore, and so such artists are left in the lurch— which is one reason why so many people say today's music is worse. There's an entire *category* of artists— namely, the pioneering outsider— that's conspicuously missing.

###

// TODO: Elaborate. Beyond the fact that I'm Asian-American, so I belong to the outgroup, just like those Black pioneers and Eminem. and Ulysses.
Do the Bobtail Yearlings belong in this category?

But let me dangle another carrot in front of you. The system isn't just broken; it's *transparently* broken, in ways that are [easy to prove](). The public is discontent. There's only so much gaslighting that defenders of today's music to do to pretend otherwise.

By working with the Bobtail Yearlings, you'll be in the center of this conversation. While everyone else like you will be remembered for perpetuating the problem, you'll be the one remembered for finding the solution.
    `,
        }}
    />
)

export default Component
