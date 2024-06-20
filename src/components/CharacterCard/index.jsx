import styled from 'styled-components'
import { addRoster, removeRoster, addTeam, removeTeam, selectStatus } from '../../slices/characterSlice'
import { selectCurrent, selectReference, pathRef, selectLangStatus } from '../../slices/languageSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
const Card = styled.div`
display:flex;
background-color: blue;
margin: 5px;
padding: 5px;
border-radius: 15px;
`
const Text = styled.div`
display:flex;
flex-direction: column;
`
const Name = styled.h1`
background: blue;
color: White;
margin:0;
margin-right: 10px;
`
const Elemental = styled.h2`
color: lightgrey;
margin:0;
`
const Path = styled.h2`
color: lightgrey;
margin:0;
`
const Icon = styled.img`
height: 100px;
width: 100px;
`
export default function CharacterCard({character, owned, team}) {
    const dispatch = useDispatch();
    const refer = useSelector(selectReference);
    const lang = useSelector(selectCurrent);
    const imgURL = 'https://enka.network/ui/hsr/';    
    const [level, setLevel] = useState(1);
    const idmod = owned?'o':'f';
    function handleCard(e) {
        if(!e.target.type){
            if(team){
                owned?dispatch(removeTeam(character)):dispatch(addTeam(character));
            } else {
                owned?dispatch(removeRoster(character)):dispatch(addRoster(character));
            }
        }
    }
    function handleLevel(e) {
        e.preventDefault();
        setLevel(level => e.target.value)
    }
    if(useSelector(selectStatus) !== 'loading' &&useSelector(selectLangStatus) !== 'loading' && character.value){
        return (
        <Card onClick={handleCard}>
            <Icon src={imgURL + character.value.AvatarSideIconPath} />
            {/* This is the full Splash Art */}
            {/* <Icon src={imgURL+character.value.AvatarCutinFrontImgPath}/> */}
            <Text>
                <Name>{refer[lang][character.value.AvatarName.Hash]}</Name>
                <Elemental>{character.value.Element}</Elemental>
                <Path>{pathRef[character.value.AvatarBaseType]}</Path>
            </Text>
            {/* <Text>
                <div>
                    <input type="number" id={idmod+'input'+character.key}
                    min={1} max={80} value={level}
                    onChange={handleLevel}/>
                </div>
            </Text> */}
        </Card>
    )}
    else {
        return (
            <></>
        )
    }
}