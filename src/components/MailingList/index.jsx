import React, { useState } from 'react'
import cx from 'classnames'
import * as EmailValidator from 'email-validator'

import {
    EMAIL_ACTION,
    EMAIL_NAME,
    EMAIL_DUMMY_NAME,
    EMAIL_ID,
} from '../../constants/website'

import './style.scss'

const MailingList = () => {
    const
        [isValidEmail, setIsValidEmail] = useState(false),
        [emailValue, setEmailValue] = useState('')

    const onFocus = e => {
        logEvent({
            e,
            componentName: 'MailingList',
            analyticsIdentifier: 'email',
        })
    }

    const onClick = e => {
        logEvent({
            e,
            componentName: 'MailingList',
            analyticsIdentifier: 'submit',
        })
    }

    const onChange = ({ target: { value } }) => {
        const emailValue = value.replace(' ', '')

        setIsValidEmail(EmailValidator.validate(emailValue))
        setEmailValue(emailValue)
    }

    return (
        <form
            noValidate
            {...{
                className: cx(
                    'MailingList',
                    'responsive__pageChild'
                ),
                action: EMAIL_ACTION,
                method: 'post',
                target: '_blank',
            }}
        >
            <label
                {...{
                    className: cx(
                        'MailingList__label',
                        'Rancho'
                    ),
                }}
            >
                Mailing List
            </label>
            <div
                {...{
                    className: cx(
                        'MailingList__inputs'
                    ),
                }}
            >
                <input
                    required
                    {...{
                        className: cx(
                            'MailingList__emailField',
                            'MailingList__input',
                            'PtSansNarrow'
                        ),
                        id: EMAIL_ID,
                        name: EMAIL_NAME,
                        type: 'text',
                        value: emailValue,
                        placeholder: 'Email address',
                        autoComplete: 'off',
                        maxLength: 254,
                        onFocus,
                        onChange,
                    }}
                />
                {/* Honeypot field to prevent bot signups. */}
                <div
                    {...{
                        style: {
                            position: 'absolute',
                            left: '-5000px',
                        },
                        'aria-hidden': true,
                    }}
                >
                    <input
                        {...{
                            name: EMAIL_DUMMY_NAME,
                            type: 'text',
                            defaultValue: '',
                            tabIndex: -1,
                        }}
                    />
                </div>
                <input
                    {...{
                        className: cx(
                            'MailingList__submitButton',
                            'MailingList__input',
                            'PtSansNarrow'
                        ),
                        type: 'submit',
                        value: 'Sign up!',
                        disabled: !isValidEmail,
                        onClick,
                    }}
                />
            </div>
        </form>
    )
}

export default MailingList
