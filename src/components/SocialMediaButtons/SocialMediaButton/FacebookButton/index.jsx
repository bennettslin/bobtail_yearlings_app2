import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SocialMediaButton from '../'
import Svg from '../../../../modules/Svg'
import facebook from '../../../../assets/svgs/facebook.svg'
import { openSocialMediaPopup } from '../helper'
import { FACEBOOK_ID } from '../../../../constants/socialMedia'
import './style'

const FacebookButton = ({ page }) => {

    const handleButtonClick = () => {
        openSocialMediaPopup({
            page,
            brandId: FACEBOOK_ID,
        })
    }

    return (
        <SocialMediaButton
            {...{
                className: cx(
                    'FacebookButton',
                ),
                handleButtonClick,
            }}
        >
            <Svg
                {...{
                    src: facebook,
                }}
            />
        </SocialMediaButton>
    )
}

FacebookButton.propTypes = {
    page: PropTypes.string.isRequired,
}

export default FacebookButton
