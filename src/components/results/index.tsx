import React, { ReactElement } from 'react'
import ResultsBlock from './ResultsBlock'
import {Category} from '../../types'


interface Props {
    data: Category[]
}

function Results({ data }: Props): ReactElement {
    return (
        <div className="column addresses" id="addresses">
            {data.map(s => <ResultsBlock {...s}></ResultsBlock>)}
        </div>
    )
}

export default Results
