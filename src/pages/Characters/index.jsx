import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { selectFullList, selectRoster } from '../../slices/characterSlice';
import FullList from '../../components/FullList';
import OwnedList from '../../components/OwnedList';

const Container = styled.div`
display: flex;`
export default function Characters({ list, refer, lang, oList, setOList }) {
    const storeList = useSelector(selectFullList);
    const storeOwned = useSelector(selectRoster);
    function filterByID(item) {
        let own = false;
        storeOwned.forEach(owned => {
            owned.key == item.key ? own = true : false
        })
        return !own;
    }
    function ownByID(item) {
        let own = false;
        storeOwned.forEach(owned => {
            owned.key == item.key ? own = true : false
        })
        return own;
    }
    // console.log(storeList);
    const LIST = list.filter(filterByID);
    const OWNEDLIST = list.filter(ownByID);
    //   const LIST = storeList.filter(filterByID);
    return (
        <Container>
            <FullList LIST={LIST} />
            <OwnedList oList={OWNEDLIST} />
        </Container>
    )
}