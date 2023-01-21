import React from 'react'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/essays/ongoing'

const id = 'band-mission-and-principles'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: `
**The Bobtail Yearlings promise to become the most historically consequential rock band of the 21st century! To do so, we'll lead the interdependence revolution while amassing a solid body of creative works.**

The following guiding principles will help us fulfill this mission.

### Historical consequence

${'  ' || `
// TODO: Make link a target blank.
`}

In the early days of rock, an artist could accidentally stumble into the history books. But from here on out, making history will require deliberate effort. And so every decision the Bobtail Yearlings make will be informed by the [five vowels of historical consequence](/essays/ongoing/five-vowels-of-historical-consequence).

### Interdependence

The best art is made by interdependent artists— and this has always been so. As such, the Bobtail Yearlings will work closely with BYCombo, our nonprofit incubator, to make the system work again for ourselves and other interdependent bands.

### Emotional intelligence

It should be a rewarding experience for others to work closely with the Bobtail Yearlings. And it should feel just as fulfilling for us to work closely with each other. So as an act of good faith, each of us will vow to treat others, and ourselves, with empathy and respect.

### Member recruitment

Every individual brings in a unique perspective and skill set. For the sake of artistic growth, Bobtail Yearlings should always be open to adding new Yearlings.

While we won't choose anyone on the basis of race or gender, the benefits of diversity and the hazards of unconscious bias will be addressed for each new prospect.

### Member roles

For each project, one or a few Yearlings will be put in charge of artistic development.

One additional Yearling will be a full-time admin. The admin will be in charge of all administrative work, such as social media engagement.

### Member duties

Each Yearling will work at least forty hours a week to benefit the band, for the duration of their time in the band. This work can largely be self-directed. Examples include practicing one's instrument, writing song parts, and so forth.

Naturally, touring and performing count as band work. Some projects will also require members to undertake specific tasks. In such cases, the project manager will work with these members to ensure that expectations are reasonable, and needed resources are provided.

Members are exempt from working on holidays, vacations, and sick days.

### Compensation

Every Yearling who participates in the creation of a project will get equal credit and royalties. This includes the admin.

${'  ' || `
// TODO: Italicize board games?
`}

Ongoing revenue from the band's extramusical projects, such as [Bobtail Dominoes](https://bobtaildominoes.com) and [*Bobtail Method*](https://bobtailmethod.com), will first go to any new Yearlings to grow their savings, up to a fixed limit. Any leftover amount will then go into a general band fund.

### Future growth



### Self-sacrifice

Blah
    `,
        }}
    />
)

export default Component
