import React from 'react'
import './index.scss'
import { guidGenerator } from './utils'

export const Checkbox = ({ children, id, ...rest }) => {
    if (!id) {
        id = guidGenerator()
    }

    return (
        <label className="checkbox" htmlFor={id}>
            <span>{children}</span>
            <input id={id} {...rest} type="checkbox" />
            <div className="checkbox-border" />
        </label>
    )
}
