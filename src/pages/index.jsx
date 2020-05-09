import React from 'react'
import cx from 'classnames'

import MailingList from '../components/MailingList'

import './style.scss'

const Home = () => (
    <div
        {...{
            className: cx(
                'Home'
            )
        }}
    >
        <MailingList />
    </div>
)

export default Home
