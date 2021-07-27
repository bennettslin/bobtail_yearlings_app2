import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import FacebookButton from './ShareButton/FacebookButton'
import TwitterButton from './ShareButton/TwitterButton'
import CopyUrlButton from './ShareButton/CopyUrlButton'
import './style'

const ShareButtons = ({
    className,
}) => (
    <div
        {...{
            className: cx(
                'ShareButtons',
                className,
            ),
        }}
    >
        <FacebookButton />
        <TwitterButton />
        <CopyUrlButton />
    </div>
)

ShareButtons.propTypes = {
    className: PropTypes.string,
}

export default ShareButtons
