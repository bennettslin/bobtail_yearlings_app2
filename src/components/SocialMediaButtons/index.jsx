import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import FacebookButton from './SocialMediaButton/FacebookButton'
import TwitterButton from './SocialMediaButton/TwitterButton'
import CopyUrlButton from './SocialMediaButton/CopyUrlButton'
import './style'

const SocialMediaButtons = ({
    className,
}) => (
    <div
        {...{
            className: cx(
                'SocialMediaButtons',
                className,
            ),
        }}
    >
        <FacebookButton />
        <TwitterButton />
        <CopyUrlButton />
    </div>
)

SocialMediaButtons.propTypes = {
    className: PropTypes.string,
}

export default SocialMediaButtons
