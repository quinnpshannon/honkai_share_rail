import styled from 'styled-components'
import { pathRef } from '../../api'
import { useState } from 'react'
const Card = styled.div`
display:flex;
background-color: green;
margin: 5px;
padding: 5px;
`
const Text = styled.div`
display:flex;
flex-direction: column;
`
const Name = styled.h1`
background: blue;
color: white;
margin:0;
`
const Elemental = styled.h2`
background: white;
color: purple;
margin:0;
`
const Path = styled.h2`
background: white;
color: purple;
margin:0;
`
const Icon = styled.img`
height: 100px;
width: 100px;
`
export default function CharacterCard({ character, refer, lang }) {
    const imgURL = 'https://enka.network/ui/hsr/';
    const [level, setLevel] = useState(1);
    const [owned, setOwned] = useState(false);
    function handleCard(e) {
        if(!e.target.type){
            setOwned(!owned);
        }
    }
    function handleLevel(e) {
        e.preventDefault();
        setLevel(level => e.target.value)
    }
    return (
        <Card onClick={handleCard}>
            {/* This is the Round Icon */}
            <Icon src={imgURL + character.value.AvatarSideIconPath} />
            {/* This is the full Splash Art */}
            {/* <Icon src={imgURL+character.value.AvatarCutinFrontImgPath}/> */}
            <Text>
                <Name>{refer[lang][character.value.AvatarName.Hash]}</Name>
                <Elemental>{character.value.Element}</Elemental>
                <Path>{pathRef[character.value.AvatarBaseType]}</Path>
            </Text>
            <Text>
                <div>
                    <input type="number"
                    min={1} max={80} value={level}
                    onChange={handleLevel}/>
                </div>
                <h6>{owned?'True' : 'False'}</h6>
            </Text>
        </Card>
    )
}