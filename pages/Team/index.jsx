import styled from 'styled-components'
import CharacterCard from '../../components/CharacterCard'
export default function Team () {
    const charaObject = {
        name: 'Kafka',
        element: 'Lightning',
        path: 'Nihility'
    }
 return (
    <>
        <h1>My Team</h1>
        <CharacterCard character={charaObject}/>
    </>
 )   
}