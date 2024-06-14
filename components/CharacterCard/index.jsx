import styled from 'styled-components'
const Card = styled.div`
display:flex;
flex-direction: column;`
const Name = styled.h1`
background: blue;
color: white;`
const Elemental = styled.h2`
background: white;
color: purple;`
const Path = styled.h2`
background: white;
color: purple;`
export default function CharacterCard ({character}) {
 return (
    <Card>
        <Name>{character.name}</Name>
        <Elemental>{character.element}</Elemental>
        <Path>{character.path}</Path>
    </Card>
 )   
}