import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import FacebookButton from './SocialMediaButton/FacebookButton'
import TwitterButton from './SocialMediaButton/TwitterButton'
import CopyUrlButton from './SocialMediaButton/CopyUrlButton'
import './style'

const SocialMediaButtons = ({
    id,
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
        <FacebookButton {...{ id }} />
        <TwitterButton {...{ id }} />
        <CopyUrlButton {...{ id }} />
    </div>
)

SocialMediaButtons.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default SocialMediaButtons
