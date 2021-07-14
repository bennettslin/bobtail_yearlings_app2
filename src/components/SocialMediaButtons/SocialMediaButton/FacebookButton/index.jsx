import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SocialMediaButton from '../'
import Svg from '../../../../modules/Svg'
import facebook from '../../../../assets/svgs/facebook.svg'
import './style'

// eslint-disable-next-line no-unused-vars
const FacebookButton = ({ id }) => {
    return (
        <SocialMediaButton
            {...{
                className: cx(
                    'FacebookButton',
                ),
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
    id: PropTypes.string.isRequired,
}

export default FacebookButton
