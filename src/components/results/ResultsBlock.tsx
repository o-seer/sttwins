import React, { ReactElement } from 'react'
import {Category} from '../../types'


function ResultsBlock({ header, content }: Category): ReactElement {

    const headerHtml = header ? <h2>{header}</h2> : null;

    const addressesHtml = content.map(entry => {
        return (
            <div className="f-row">
                <div className="f-title">{entry.title}</div>
                <div className="f-right">
                    <div className="f-dots">&nbsp;</div>
                    <div className="f-address">{entry.address}</div>
                </div>
            </div>)
    })

    return (
        <>
            {headerHtml}
            {addressesHtml}
        </>
    )
}

export default ResultsBlock
