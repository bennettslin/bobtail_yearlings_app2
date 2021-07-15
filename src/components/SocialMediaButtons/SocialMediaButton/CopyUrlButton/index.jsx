import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactTooltip from 'react-tooltip'
import SocialMediaButton from '../'
import Svg from '../../../Svg'
import copyUrl from '../../../../assets/svgs/copyUrl'
import copyUrlCopied from '../../../../assets/svgs/copyUrlCopied'
import { getEncodedUrl } from '../../../../constants/pages'
import './style'

const TOOLTIP_TEXT = 'link copied!'

const CopyUrlButton = ({ page }) => {
    const
        buttonRef = useRef(),
        copiedUrlRef = useRef(),
        [isCopied, setIsCopied] = useState(false),
        [copyTimeoutId, setCopyTimeoutId] = useState(-1)

    copiedUrlRef.current = isCopied

    const resetCopiedUrlKey = () => {
        if (copiedUrlRef.current) {
            setIsCopied(false)
        }
    }

    const handleButtonClick = () => {
        navigator.clipboard.writeText(getEncodedUrl(page))

        clearTimeout(copyTimeoutId)
        setIsCopied(true)

        setCopyTimeoutId(setTimeout(
            resetCopiedUrlKey,
            1500,
        ))
    }

    useEffect(() => {
        if (isCopied) {
            ReactTooltip.show(buttonRef.current)
        } else {
            ReactTooltip.hide(buttonRef.current)
        }
    }, [isCopied])

    return (
        <SocialMediaButton
            isTooltipSuccess
            {...{
                ref: buttonRef,
                className: cx(
                    'CopyUrlButton',
                ),
                ...isCopied && {
                    tooltipId: page,
                    tooltipText: TOOLTIP_TEXT,
                },
                handleButtonClick,
                handleTooltipHide: resetCopiedUrlKey,
            }}
        >
            <Svg
                {...{
                    src: isCopied ? copyUrlCopied : copyUrl,
                }}
            />
        </SocialMediaButton>
    )
}

CopyUrlButton.propTypes = {
    page: PropTypes.string.isRequired,
}

export default CopyUrlButton
