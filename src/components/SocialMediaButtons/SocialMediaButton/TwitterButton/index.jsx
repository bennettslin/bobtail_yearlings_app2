import React from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import SocialMediaButton from '../'
import Svg from '../../../Svg'
import twitter from '../../../../assets/svgs/twitter.svg'
import { mapSelectedPage } from '../../../../redux/page/selector'
import { openSocialMediaPopup } from '../helper'
import { TWITTER_ID } from '../../../../constants/socialMedia'
import './style'

const TwitterButton = () => {
    const selectedPage = useSelector(mapSelectedPage)

    const handleButtonClick = () => {
        openSocialMediaPopup({
            page: selectedPage,
            brandId: TWITTER_ID,
        })
    }

    return (
        <SocialMediaButton
            {...{
                className: cx(
                    'TwitterButton',
                ),
                id: TWITTER_ID,
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

export default TwitterButton
