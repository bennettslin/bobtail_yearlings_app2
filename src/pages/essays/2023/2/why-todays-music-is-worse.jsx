import React from 'react'
import Page from '../../../../containers/Page'
import { pagesMap } from '../../../../content/essays/2023'

const id = 'why-todays-music-is-worse'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: `
*TODO: This is a work in progress.*

The reasons why today's music is worse are [overdetermined](https://en.wikipedia.org/wiki/Overdetermination), of course. But if you need to convince someone on the fly, this is, I think, the most convincing argument.

### Measure systems, not art

Music is subjective, but systems are not. So to prove that today's music is worse, we just need to prove that the systems that give us our music have become worse.

### Systems should empower people

The systems most hated by society are when corporate suits who know nothing about the music simply sign random bands, hoping to luck into finding something the people like.

A better system is when indie labels run by people who care deeply about the local and underground scenes, sign one band at a time, knowing exactly what the people like.

But the systems we love the most are when the people themselves simply get to pick what they like.

Let's agree that the story for the past two decades is that society is moving closer to the systems we love.

### People dislike creativity

But science shows that people dislike creativity, and experts more so than anyone else! Instead, we simply credit the music we like with being creative.

For this reason, we can predict that the best systems for discovering creativity are the ones where those who know nothing about the music simply sign random artists— the systems we hate!

While the absolute worst systems for discovering creativity are the ones where people who intimately know the music sign exactly the band that people like.

In other words, the story for the past two decades is that society is moving further away from the best systems for discovering creativity.

### Conclusion

If the systems are worse at discovering creativity, then there's less creativity in today's music. But because we dislike creativity, ironically, there's a good case to be made that music has never been more likable than it is today!

But there's no way around it. Music isn't better because more people here and now like it. Music is better when it's a responsible citizen, paving the way for future generations as past generations once did. But today's music no longer does.

Therefore, today's music is worse.
    `,
        }}
    />
)

export default Component
