import React, { ReactElement } from 'react'

interface Props {
    name: string
}

function AddressSectionHeader({name}: Props): ReactElement {
    return (
        <h2 className="address-header">{name}</h2>
    )
}

export default AddressSectionHeader
