import styled from 'styled-components'
const Card = styled.div`
display:flex;
background-color: green;
margin: 5px;
padding: 5px;
`
const Text = styled.div`
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
const Icon = styled.img`
height: 100px;
width: 100px;`
export default function CharacterCard ({character, refer, lang}) {
    const imgURL = 'https://enka.network/ui/hsr/';
    return (
    <Card>
        <Icon src={imgURL+character.value.AvatarSideIconPath}/>
        <Text>
        <Name>{refer[lang][character.value.AvatarName.Hash]}</Name>
        <Elemental>{character.value.Element}</Elemental>
        <Path>{character.value.AvatarBaseType}</Path>
        </Text>
    </Card>
 )   
}