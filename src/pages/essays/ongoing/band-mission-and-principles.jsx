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

In the early days of rock, an artist could accidentally stumble into the history books. But from here on out, making history will require deliberate effort. And so every decision the Bobtail Yearlings make will be informed by the [five vowels of historical consequence](https://bobtailyearlings.com/essays/ongoing/five-vowels-of-historical-consequence).

In classical music, the best composers got *better* with age. For rock to remain relevant as a musical genre, it must reach this next level of maturity. As such, the Bobtail Yearlings expect to be a working band for decades, with our best works always ahead of us.

##### Interdependence

The best art is made by interdependent artists— and this has always been the case. For this reason, the Bobtail Yearlings will work closely with [BYCombo](https://bycombo.com), our band incubator, to make the system work again for ourselves and our interdependent allies.

A truly creative work is always in danger of alienating even our most dedicated fans. As such, we'll always choose to work with business partners who can advocate for such works on our behalf.

##### Emotional intelligence

For the Bobtail Yearlings to be highly effective in fulfilling our mission, others should find it enjoyable and rewarding to work alongside us. And it should feel just as meaningful for us to work with each other.

So each Yearling will vow to be a paragon of emotional intelligence, who'll always treat others with empathy and respect.

##### Recruitment

For the sake of artistic growth through the decades, we should always be open to adding new Yearlings, including artists who work in other mediums, like illustration or puppetry.

While we won't select new Yearlings on the basis of race or gender, we'll openly address the benefits of diversity and the hazards of unconscious bias.

##### Roles

The band leader makes executive decisions on the overall direction of the Bobtail Yearlings. Bennett is our band leader for now, since this is the de facto reality. However, in the long term we should be open to having multiple band leaders, or even none at all.

For each project, one Yearling will be assigned the role of project manager. The project manager will oversee artistic development of that project.

There will always be one Yearling who's a full-time admin in charge of administrative work such as social media engagement. They'll also oversee development of our extracurricular projects, such as [*Bobtail Dominoes*](https://bobtaildominoes.com), [*Bobtail Method*](https://bobtailmethod.com), and of course, BYCombo.

##### Duties

Every Yearling will work forty hours a week to benefit the band, for the duration of their time in the band. This work will largely be self-directed. Examples include practicing one's instrument, writing song parts, and so forth. Naturally, touring and performing count as band work.

Some projects will require certain Yearlings to undergo extensive artistic development, such as learning a new skill set. In such cases, the project manager will work with them to ensure that expectations are reasonable, and that needed resources are provided.

Of course, we'll all take holidays, vacations, and sick days off.

##### Compensation

Anyone who's a Yearling during the creation of a project will be given equal credit and royalties. This includes the admin, as well as artists who work in other mediums.

Ongoing revenue from our extracurricular projects will first go to new Yearlings to grow their savings, up to a fixed limit. Any leftover amount will then go into our general band fund.
    `,
        }}
    />
)

export default Component
