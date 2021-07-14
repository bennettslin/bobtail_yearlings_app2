import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SocialMediaButton from '../'
import Svg from '../../../../modules/Svg'
import twitter from '../../../../assets/svgs/twitter.svg'
import './style'

// eslint-disable-next-line no-unused-vars
const TwitterButton = ({ id }) => {
    return (
        <SocialMediaButton
            {...{
                className: cx(
                    'TwitterButton',
                ),
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
    id: PropTypes.string.isRequired,
}

export default TwitterButton
