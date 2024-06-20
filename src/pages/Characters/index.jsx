import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { selectFullList, selectRoster, setRoster } from '../../slices/characterSlice';
import { useState } from 'react';
import axios from 'axios';
import FullList from '../../components/FullList';
import OwnedList from '../../components/OwnedList';

// const baseURL = 'https://honkai-share-rail-server.onrender.com/auth/signin'
const baseURL = 'http://localhost:4000/users/'

const Container = styled.div`
display: flex;
justify-content: center;`
export default function Characters({ userObj }) {
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
    const LIST = storeList.filter(filterByID);
    const OWNEDLIST = storeList.filter(ownByID);
    console.log('Owned');
    console.log(OWNEDLIST);
    console.log('List');
    console.log(LIST);
    async function handleSave(e) {
        e.preventDefault();
        console.log(storeList);
        console.log(OWNEDLIST);
        if (userObj.username !== '') {
            const response = await axios.put(baseURL + 'char/' + userObj.username, OWNEDLIST);
            const data = await response.data;
            console.log(await data);
        }
    }

    return (
        <>
            <Container>
                <button onClick={handleSave}>Save</button>
            </Container>
            <Container>
                <FullList LIST={LIST} />
                <OwnedList oList={OWNEDLIST} />
            </Container>
        </>
    )
}