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

**The Bobtail Yearlings promise to be the most historically consequential rock band of the 21st century! We'll do so by leading the interdependence revolution while amassing a solid body of creative works.**

### Our guiding principles

##### Historical consequence

In the past, the rock music of the English-speaking world was *the* canon. It was often the most accomplished, and always the most original. But today's indie rock isn't better than any foreign canon out there, which is why it seems so inconsequential.

To make history once again, bands need to be the best in the world— and this requires deliberate effort. So every decision the Bobtail Yearlings make will be informed by our [five vowels of historical consequence](https://bobtailyearlings.com/essays/ongoing/five-vowels-of-historical-consequence).

##### Interdependence

Indie rock expects artists to divert time and energy toward administrative work that, in the past, would have been handled by business partners. Who would bet on any such artist to be the best in the world? To resurrect the rock canon, then, bands must be allowed once again to focus solely on their craft.

And so the Bobtail Yearlings will work closely with [BYCombo](https://bycombo.com), our band incubator, to make the system work again for interdependent bands like ourselves.

##### Longevity

${'  ' || `
// TODO: Low-hanging fruit.
`}

In classical music, the best composers got *better* with age. For rock to remain relevant as a musical genre, it must reach this next level of maturity. As such, the Bobtail Yearlings plan to be a working band for at least as long as Bennett is alive, with our best works always ahead of us.

##### Martyrdom

${'  ' || `
// TODO: Rephrase "to revive interdependence."
`}

The last generation of artists to benefit from interdependence refused to pay it forward, causing the system to collapse. To revive interdependence, then, we must sacrifice for the next generation, despite the previous one not having done the same for us.

To revive interdependence, a band will need to enrich their business partners first. This will leave them both unpaid, *and* reviled as useful idiots— which is why no band has ever yet made an attempt. To save rock, then, the Bobtail Yearlings volunteer to be the first.

##### Business partners

Studies show that humans actually dislike creativity— and [experts more so](https://www.theatlantic.com/business/archive/2014/10/why-new-ideas-fail/381275) than anyone else. This is why, time and time again, business partners who care most about backing great art— who thus pride themselves on knowing what great art looks like— end up backing the least creative works.

Meanwhile, the most creative works are often backed by those who are totally clueless about art. For this reason, the Bobtail Yearlings prefer to work with business partners who take pride in knowing how to do business, not in recognizing great art.

##### Emotional intelligence

If the Bobtail Yearlings are to achieve our mission, then others should find it enjoyable and rewarding to interact with us. And it should feel just as meaningful for us to work with each other. So each Yearling will vow to be a model of emotional intelligence, who'll always treat others with empathy and respect.

Of course, we shouldn't hesitate to criticize indie rock as a flawed ideology. But we should also remember that those who've devoted their lives to it are people like us, and they're the heroes of their own stories.

##### Recruitment

For the sake of artistic growth through the decades, we should always be open to adding new Yearlings, including artists who work in other mediums.

While we won't select new Yearlings on the basis of race or gender, we'll openly address the benefits of diversity and the hazards of unconscious bias.

##### Roles

The band leader decides on the overall vision of the Bobtail Yearlings. For now, Bennett is our band leader, since this is the de facto reality. However, in the long term we should be open to having multiple band leaders, or even none at all.

For each project, one Yearling will be assigned the role of project manager. The project manager will oversee artistic development of that project.

One Yearling will be a full-time admin, in charge of administrative work such as social media engagement. They'll also oversee development of our extracurricular projects, such as [*Bobtail Dominoes*](https://bobtaildominoes.com), [*Bobtail Method*](https://bobtailmethod.com), and of course, BYCombo.

##### Duties

Every Yearling will work forty hours a week to benefit the band, for the duration of their time in the band. This work will largely be self-directed. Examples include practicing one's instrument, writing song parts, and so forth. Naturally, touring and performing count as band work.

Some projects will require certain Yearlings to undergo extensive artistic development, such as learning a new skill set. In such cases, the project manager will work with them to ensure that expectations are reasonable, and that needed resources are provided.

Of course, we'll take holidays, vacations, and sick days off.

##### Compensation

Everyone who's a Yearling during the creation of a project will be given equal credit and royalties. This includes the admin, as well as artists who work in other mediums.

Ongoing revenue from our extracurricular projects will first go to new Yearlings to grow their savings, up to a fixed limit. Any leftover amount will then go into our general band fund.
    `,
        }}
    />
)

export default Component
