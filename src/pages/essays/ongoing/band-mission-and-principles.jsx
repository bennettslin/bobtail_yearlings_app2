import React from 'react'
import Page from '../../../containers/Page'
import { pagesMap } from '../../../content/essays/ongoing'

const id = 'band-mission-and-principles'

const Component = () => (
    <Page
        {...{
            ...pagesMap[id],
            body: `
**The Bobtail Yearlings promise to become the most historically consequential rock band of the 21st century. To do so, we'll lead the interdependence revolution while amassing a solid body of creative works.**

The following guiding principles will help us fulfill this mission.

### Historical consequence

${'  ' || `
// TODO: Make link a target blank.
`}

From here on out, making rock history will require deliberate effort. And so every decision we make will be informed by our [five vowels of historical consequence](/essays/ongoing/five-vowels-of-historical-consequence).

### Interdependence

The best art is made by interdependent artists— and this has always been the case. We'll lead the 


For this reason, we'll work closely with BYCombo,  help create interdependent systems to benefit both ourselves and other bands.

### Emotional intelligence

Being in the Bobtail Yearlings should be a meaningful and rewarding experience. As such, each member will vow to be a paragon of emotional intelligence. Naturally, this isn't binding but simply an act of good faith, which will serve as a permanent reminder to treat others with empathy and respect.

### Member recruitment

While the Bobtail Yearlings won't choose new members on the basis of race or gender, the benefits of diversity, as well as the dangers of unconscious bias, will be openly discussed for each prospect.



More isn't always better… but it's always *more*.
Our founding member 

### Member roles

There will be no permanent leader, only temporary project managers. For each project, one or a few members will be in charge of artistic development.

One additional member will be a full-time admin. The admin will be in charge of all administrative work, such as social media engagement.



### Member duties

Each member will work at least forty hours a week to benefit the band, for the duration of their time as a member. This work can largely be self-directed. Examples include practicing one's instrument, writing song parts, and so forth.

Naturally, touring and performing count as band work. Some projects will also require members to undertake specific tasks. In such cases, the project manager will work with these members to ensure that expectations are reasonable, and that needed resources are provided.

Members are exempt from working on holidays, vacations, and sick days.

### Compensation

Every member who participates in the creation of a project will get equal credit and royalties. This includes the admin.

${'  ' || `
// TODO: Italicize board games?
`}

Ongoing revenue from the band's extramusical projects, such as [Bobtail Dominoes](https://bobtaildominoes.com) and [*Bobtail Method*](https://bobtailmethod.com), will first go to new members to grow their savings, up to a fixed limit. Any leftover amount will then go into a general band fund.

### Future growth



### Self-sacrifice

Blah
    `,
        }}
    />
)

export default Component
