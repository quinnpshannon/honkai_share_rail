import styled from 'styled-components'
import CharacterCard from '../../components/CharacterCard'
import { selectRoster, selectTeam, setTeam } from '../../slices/characterSlice';
import { useSelector } from 'react-redux';
import TeamList from '../../components/TeamList';
const Row = styled.section`
display: flex;
flex-direction: row;`
export default function Team() {
    const oList = useSelector(selectRoster);
    const team = useSelector(selectTeam);
    function filterByID(item) {
        let own = false;
        team.forEach(owned => {
            owned.key == item.key ? own = true : false
        })
        return !own;
    }
    function ownByID(item) {
        let own = false;
        team.forEach(owned => {
            console.log(`${owned} - ${item}`);
            owned.key == item.key ? own = true : false
        })
        return own;
    }
    const ROSTER = oList.filter(filterByID);
    const TEAM = oList.filter(ownByID);
        return (
            <>
            <Row>
                <h1>Current Team:</h1>
            </Row>
            <TeamList team={TEAM}/>
            <h1>Roster:</h1>
            {ROSTER.map(s => (
                <CharacterCard key={'o' + s.key} character={s} owned={false} team={true} />
            ))}
        </>
    )
    

}