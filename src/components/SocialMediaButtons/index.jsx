import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import FacebookButton from './SocialMediaButton/FacebookButton'
import TwitterButton from './SocialMediaButton/TwitterButton'
import CopyUrlButton from './SocialMediaButton/CopyUrlButton'
import { HOME_PAGE } from '../../constants/pages'
import './style'

const SocialMediaButtons = ({
    page = HOME_PAGE,
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
        <FacebookButton {...{ page }} />
        <TwitterButton {...{ page }} />
        <CopyUrlButton {...{ page }} />
    </div>
)

SocialMediaButtons.propTypes = {
    page: PropTypes.string,
    className: PropTypes.string,
}

export default SocialMediaButtons
