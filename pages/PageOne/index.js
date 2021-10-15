import { useEffect, useState } from 'react'

import api from '../services/api'

import { NavBar, Container, Content, DropDown, Loading, ContainerLoading } from "./styles"
import Card from "../../components/Card"

const typesValues = [
    '',
    'micro',
    'brewpub',
    'contract',
    'regional'
]

export default function PageOne() {
    const [breweries, setBreweries] = useState([])
    const [selectedType, setSelectedType] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        api.get(`breweries?by_type=${selectedType}`).then(response => {
            setBreweries(response.data);

            setIsLoading(false);
            console.log(breweries)
        })
    }, [selectedType])

    return (
        
            <Container>
                <NavBar>
                    <h1>breweries</h1>
                    <h3>A breweries list by Open Brewery DB</h3>
                </NavBar>


                <DropDown onChange={(tipo) => setSelectedType(tipo.target.value)}>
                    {typesValues.map(type => (
                        <option value={type}>{type}</option>
                    ))}
                </DropDown>

                {isLoading ? (
                    <ContainerLoading>
                        <Loading/>
                    </ContainerLoading>
                ) : (
                    <Content>
                        {breweries.map(brewerie => (
                            <Card
                                name={brewerie.name}
                                city={brewerie.city}
                                state={brewerie.state}
                                street={brewerie.street}
                                number={brewerie.postal_code}
                                brewery_type={brewerie.brewery_type}
                            />
                        ))}
                    </Content>
                )}
            </Container>
        
    )
}