import styled from 'styled-components'
// import { setRoster, selectRoster } from '../../slices/characterSlice'
import { selectCurrent, selectReference, setCurrent } from '../../slices/languageSlice'
import { setRoster, setTeam } from '../../slices/characterSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'

const baseURL = 'http://localhost:4000/auth/'

const Column = styled.section`
display: flex;
flex-direction: column;`

export default function Bio({ userObj, setUserObj }) {
    const [delPass, setDelPass] = useState('');
    const keys = Object.keys(useSelector(selectReference));
    const lang = useSelector(selectCurrent);
    const dispatch = useDispatch();
    async function handleDelete(e){
        e.preventDefault();
        const sendBody = {username: userObj.username, password: delPass};
        console.log(sendBody);
        const response = await axios.post(baseURL, sendBody);
        const data = await response.data;
        if(data==='Deleted!'){
            setUserObj({username:''});
            dispatch(setCurrent('en'));
            dispatch(setRoster([]));
            dispatch(setTeam([]));
        }
        // setUserObj(await data);
        // dispatch(setRoster(data.characters));
    }
    return (
        <Column>
            <p>Username: {userObj.username}</p>
            <p>Display Name: {userObj.displayName}</p>
            <div>
                <label htmlFor="language">Language:</label>
                <select id="language" value={lang} onChange={(e) => dispatch(setCurrent(e.target.value))}>
                    {keys.map(l => (
                        <option value={l} key={l}>{l}</option>
                    ))}
                </select>
            </div>
            <p>to Delete your account, type your password and click delete:</p>
            <input type='password' id='delAccount' value={delPass} onChange={e => setDelPass(e.target.value)} />
            <button onClick={handleDelete}>Delete</button>
        </Column>
    )
}