import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Flex from '../../Flex'
import Svg from '../../Svg'
import styleConfigLogo from '../../../styles/logo'
import './style'

const LogoSvg = ({
    src,
    className,
    styleConfig = styleConfigLogo,
    ...rest
}) => (
    <Flex
        {...{
            className: cx(
                className,
            ),
        }}
    >
        <Svg
            {...{
                className: cx(
                    'LogoSvg',
                ),
                src,
                styleConfig,
                ...rest,
            }}
        />
    </Flex>
)

LogoSvg.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
    styleConfig: PropTypes.shape({
        className: PropTypes.string.isRequired,
        styles: PropTypes.object.isRequired,
    }),
}

export default LogoSvg
