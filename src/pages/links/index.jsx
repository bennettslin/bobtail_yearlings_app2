import React from 'react'
import Page from '../../containers/Page'

const Component = () => (
    <Page
        {...{
            body: `
[*Bobtail Dominoes*](https://www.bobtaildominoes.com/)${'  '}
Our musical tile game.

[*Yearling's Bobtail*](https://www.yearlingsbobtail.com/)${'  '}
Our "*Ulysses* of Rock Albums."

[*BYCombo*](https://www.bycombo.com/)${'  '}
Our band accelerator.

[*Bobtail Method*](https://www.bobtailmethod.com/)${'  '}
Our songwriting lesson book.
            `,
        }}
    />
)

export default Component
