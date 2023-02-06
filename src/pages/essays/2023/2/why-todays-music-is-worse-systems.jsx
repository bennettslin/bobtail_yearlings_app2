import React from 'react'
import Page from '../../../../containers/Page'
import { pagesMap } from '../../../../content/essays/2023'

const id = 'why-todays-music-is-worse-systems'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: `
*TODO: This is a work in progress.*

The reasons why today's music is worse are [overdetermined](https://en.wikipedia.org/wiki/Overdetermination), of course. But if you're looking for an explanation that's both quick and convincing, this is the one.

### Measure systems, not music

Music is subjective, but systems are not. To prove that today's music is worse, then, we'll prove that our systems for discovering artists have become worse.

### Power to the people…

Few would argue that the system most hated by society is when corporate suits, who know nothing about the music, simply sign random artists, hoping by chance to find the ones that people may like.

A better system is when knowledgeable curators, with deep ties to their local scenes, sign exactly the artists they know people will like. But the system we love most is when the people themselves simply pick the artists they like!

For the past two decades, society has been moving further away from the systems we hate, and closer to the ones we love.

### … but people dislike creativity

But science shows that people dislike creativity, and experts more so than anyone else! But we don't notice this, because, [like teachers](https://bulletproofmusician.com/do-we-have-a-hidden-bias-against-creative-people), we simply credit our favorites with being the most creative.

So out of all the systems mentioned above, the best one for discovering creativity is actually the one run by corporate suits who are clueless about the music— the system we hate!

In other words, for the past two decades, society has been moving further away from the best system for discovering creativity, towards the worst.

### Conclusion

So today's systems are worse at discovering creativity— which means today's music is less creative. Ironically, though, since people dislike creativity, music has never been more likable!

But no matter how much the *present* generation might like it, if it's less creative, then it isn't paving the way for the future. So will *future* generations say that today's music is worse? Of course.

And ultimately, theirs is the only opinion that matters.

### Afterthought

Is there a better system?
Interested in reforming the system? Help BYCombo!
    `,
        }}
    />
)

export default Component
