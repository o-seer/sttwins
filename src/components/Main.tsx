import React, { ReactElement, useState, useEffect } from 'react'
import MapLink from './MapLink'
import SearchBar from './SearchBar'
import Results from './results'
import { loadData, filter } from '../data'
import $ from 'jquery'
import { Category } from '../types'

interface Props {

}

function Main(): ReactElement {
    const [query, setQuery] = useState("");
    const [allData, setAllData] = useState<Category[]>([])
    const [displayData, setDisplayData] = useState<Category[]>([])

    useEffect(() => {
        const load = async () => {
            const data = await loadData();
            setAllData(data);
        }
        load();
    }, []);

    useEffect(() => {
        const filtered = filter(allData, query);
        setDisplayData(filtered);
    }, [query, allData])


    const resultsNode = $.isEmptyObject(displayData)
        ? <h1>no results</h1>
        : <Results data={displayData} />

    return (
        <section className="hero is-fullheight">
            <h1 className="address-book title is-size-3 has-text-white is-uppercase has-text-weight-bold has-text-centered">Адресная книга Сейнт-Твинс</h1>
            <section className="address-book-section hero-body">
                <div className="container is-widescreen">
                    <div className="columns has-text-white">
                        <div className="column is-one-quarter is-narrow-mobile">
                            <SearchBar queryUpdated={setQuery} />
                            <MapLink />
                        </div>
                        {resultsNode}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Main
