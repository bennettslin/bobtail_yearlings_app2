import React from 'react'
import cx from 'classnames'
import MailingList from '../../../components/MailingList'
import SocialButtons from '../../../components/SocialButtons'
import './style'

const Footer = () => (
    <div
        {...{
            className: cx(
                'Footer'
            ),
        }}
    >
        <MailingList />
        <SocialButtons />
    </div>
)

export default Footer
