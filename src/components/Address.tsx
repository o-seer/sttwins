import React, { ReactElement } from 'react'

interface Props {
    name: string,
    addr: string
}

function Address({ name, addr}: Props): ReactElement {
    return (
        <div className="f-row">
            <div className="f-title">{name}</div>
            <div className="f-right">
                <div className="f-dots">&nbsp;</div>
                <div className="f-address">{addr}</div>
            </div>
        </div>
    )
}

export default Address
