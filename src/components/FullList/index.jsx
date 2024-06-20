import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectReference, pathRef, selectCurrent } from '../../slices/languageSlice'
import CharacterCard from '../CharacterCard'
const Column = styled.section`
display: flex;
flex-direction: column;`

export default function FullList({ LIST }) {
    const refer = useSelector(selectReference)
    const lang = useSelector(selectCurrent);
    return (
        <Column>
        <h1>Characters (full list)</h1>
        {LIST.map(s => (
            <CharacterCard key={s.key} character={s} refer={refer} lang={lang}/>
        ))}
        </Column>
    )
}