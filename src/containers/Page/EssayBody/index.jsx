import React from 'react'
import PropTypes from 'prop-types'
import Body from '../Body'
import EssayFooter from './EssayFooter'
import Markdown from '../../../components/Markdown'
import Heading from '../../../components/Heading'
import { getMonthName } from './helper'

const EssayBody = ({
    month,
    year,
    children,
}) => (
    <>
        <Body>
            {month && year && (
                <Heading {...{ level: 5 }}>
                    {`${getMonthName(month)} ${year}`}
                </Heading>
            )}
            <Markdown>
                {children}
            </Markdown>
        </Body>
        <EssayFooter />
    </>
)

EssayBody.propTypes = {
    month: PropTypes.number,
    year: PropTypes.number,
    children: PropTypes.string.isRequired,
}

export default EssayBody
