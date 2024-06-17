import styled from 'styled-components'
import CharacterCard from '../../components/CharacterCard'
import { useSelector } from 'react-redux'
import { selectFullList } from '../../slices/characterSlice'

export default function Landing (refer, lang) {
    const characters = useSelector(selectFullList);
    console.log('Landing')
    console.log(useSelector(selectFullList));
    const charaObject = {
        name: 'Kafka',
        element: 'Lightning',
        path: 'Nihility'
    }
    return (
    <>
        <h1>Landing</h1>
        <select name="chara">
                {characters.map(c => (
                    <option value={c.key} key={c.key}>refer[lang][c.value.AvatarName.Hash]</option>
                ))}
        </select>
        <CharacterCard character={charaObject}/>
    </>
    )   
}