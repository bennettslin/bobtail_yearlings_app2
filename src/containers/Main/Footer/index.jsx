import React from 'react'
import cx from 'classnames'
import MailingList from '../../../components/MailingList'
import SocialMediaButtons from '../../../components/SocialMediaButtons'
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
        <SocialMediaButtons />
    </div>
)

export default Footer
