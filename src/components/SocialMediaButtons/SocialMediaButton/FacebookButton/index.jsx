import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import SocialMediaButton from '../'
import Svg from '../../../Svg'
import facebook from '../../../../assets/svgs/facebook.svg'
import { mapSelectedPage } from '../../../../redux/page/selector'
import { openSocialMediaPopup } from '../helper'
import { FACEBOOK_ID } from '../../../../constants/socialMedia'
import './style'

const FacebookButton = () => {
    const selectedPage = useSelector(mapSelectedPage)

    const handleButtonClick = () => {
        openSocialMediaPopup({
            page: selectedPage,
            brandId: FACEBOOK_ID,
        })
    }

    return (
        <SocialMediaButton
            {...{
                className: cx(
                    'FacebookButton',
                ),
                id: FACEBOOK_ID,
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

export default FacebookButton
