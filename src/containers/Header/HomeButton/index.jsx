import React from 'react'
import cx from 'classnames'
import HeaderButton from '../HeaderButton'
import Svg from '../../../components/Svg'
import bobtailYearlings from '../../../assets/svgs/bobtailYearlings.svg'
import { HOME_PAGE } from '../../../constants/pages'
import './style'

const HomeButton = () => (
    <HeaderButton
        {...{
            className: cx(
                'HomeButton',
            ),
            pageLink: HOME_PAGE,
        }}
    >
        <Svg
            {...{
                src: bobtailYearlings,
            }}
        />
    </HeaderButton>
)

export default HomeButton
