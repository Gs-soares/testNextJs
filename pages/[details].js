import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'

import api from './services/api'

export default function details() {

    const router = useRouter();

    console.log(router);

    const [breweries, setBreweries] = useState([])

    useEffect(() => {
        api.get(`breweries?by_name=${router.query.details}`).then(response => {
            setBreweries(response.data);

            console.log(breweries)
        })
    })

    return (
        <div>
            <Link href="/">voltar</Link>
            {/* {breweries.map(brewerie => (
                            <Card
                                name={brewerie.name}
                                city={brewerie.city}
                                state={brewerie.state}
                                street={brewerie.street}
                                number={brewerie.postal_code}
                                brewery_type={brewerie.brewery_type}
                            />
                        ))} */}
        </div>
    )
}