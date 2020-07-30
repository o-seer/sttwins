import React, { ReactElement } from 'react'

function MapLink(): ReactElement {
    return (
        <div className="st-twins-header-1 is-size-5 is-uppercase">
            <a href="https://cdn.sttwins.com/static/book/map.pdf" target="_blank" className="has-text-white">Карта города</a>
            <hr className="st-twins-line is-paddingless is-marginless" />
        </div>
    )
}

export default MapLink
