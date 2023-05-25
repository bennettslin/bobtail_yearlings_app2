import React from 'react'
import cx from 'classnames'
import MailingListInputs from './Inputs'
import FinePrint from '../FinePrint'
import { getFormattedText } from '../../utils/format'
import { EMAIL_ACTION } from '../../constants/website'
import './style'

const MailingList = () => (
    <form
        noValidate
        {...{
            className: cx(
                'MailingList',
            ),
            action: EMAIL_ACTION,
            method: 'post',
            target: '_blank',
        }}
    >
        <label {...{ className: cx('MailingList__label') }}>
            Join our mailing list:
        </label>
        <MailingListInputs />
        <FinePrint>
            {getFormattedText(
                `We'll send out one email per month at most.`,
            )}
        </FinePrint>
    </form>
)

export default MailingList
