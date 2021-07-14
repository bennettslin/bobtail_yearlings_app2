import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import SocialMediaButton from '../'
import Svg from '../../../../modules/Svg'
import copyUrl from '../../../../assets/svgs/copyUrl.svg'
import './style'

// eslint-disable-next-line no-unused-vars
const CopyUrlButton = ({ id }) => {
    return (
        <SocialMediaButton
            {...{
                className: cx(
                    'CopyUrlButton',
                ),
            }}
        >
            <Svg
                {...{
                    src: copyUrl,
                }}
            />
        </SocialMediaButton>
    )
}

CopyUrlButton.propTypes = {
    id: PropTypes.string.isRequired,
}

export default CopyUrlButton
