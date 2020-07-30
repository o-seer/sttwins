import React, { ReactElement, useCallback } from 'react'
import debounce from "debounce";

interface Props {
    queryUpdated: (query: string) => void;
}

// add update prop changed

function SearchBar({queryUpdated}: Props): ReactElement {
    const setQueryValue = useCallback(
        debounce((query: any) => queryUpdated(query), 500),
        []
      );

    return (
        <div className="field">
            <input className="input is-success" type="search" placeholder="Поиск" onChange={event => setQueryValue(event.target.value)} />
        </div>
    )
}

export default SearchBar
