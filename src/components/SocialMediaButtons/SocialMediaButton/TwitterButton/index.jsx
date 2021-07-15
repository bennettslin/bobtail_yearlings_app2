import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SocialMediaButton from '../'
import Svg from '../../../../modules/Svg'
import twitter from '../../../../assets/svgs/twitter.svg'
import { openSocialMediaPopup } from '../helper'
import { TWITTER_ID } from '../../../../constants/socialMedia'
import './style'

const TwitterButton = ({ page }) => {

    const handleButtonClick = () => {
        openSocialMediaPopup({
            page,
            brandId: TWITTER_ID,
        })
    }

    return (
        <SocialMediaButton
            {...{
                className: cx(
                    'TwitterButton',
                ),
                handleButtonClick,
            }}
        >
            <Svg
                {...{
                    src: twitter,
                }}
            />
        </SocialMediaButton>
    )
}

TwitterButton.propTypes = {
    page: PropTypes.string.isRequired,
}

export default TwitterButton
