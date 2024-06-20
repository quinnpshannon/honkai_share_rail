import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectReference, selectCurrent } from '../../slices/languageSlice'
import CharacterCard from '../CharacterCard'
const Row = styled.section`
display: flex;
flex-direction: row;`

export default function TeamList({ team }) {
    const refer = useSelector(selectReference)
    const lang = useSelector(selectCurrent);
    return (
        <Row>
        {team.map(s => (
            <CharacterCard key={'o'+s.key} character={s} owned={true} team={true}/>
        ))}
        </Row>
    )
}