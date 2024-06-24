import styled from 'styled-components'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRoster, selectRoster } from '../../slices/characterSlice';
import axios from 'axios'
const Form = styled.form`
display: flex;
flex-direction: column;
margin-right: 10px;`
const baseURL = 'https://honkai-share-rail-server.onrender.com/auth/signin'
// const baseURL = 'http://localhost:4000/auth/signin'

export default function Login({ setUserObj }) {
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();
    const roster = useSelector(selectRoster);
    async function handleLogin(e) {
        e.preventDefault();
        const sendBody = { "username": userName, "password": pass };
        const response = await axios.post(baseURL, sendBody);
        const data = await response.data;
        setUserObj(await data);
        const userCharas = [];
        await data.characters.forEach((element) => {
            roster.forEach(chara => {
                if (element.key == chara.key) {
                    userCharas.push(chara);
                }
            })
        })
        await dispatch(setRoster(data.characters));
    }
    return (
        <Form id='login' onSubmit={handleLogin}>
            <label htmlFor="userName">User Name:</label>
            <input type="text" id="userName" value={userName} onChange={e => setUserName(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={pass} onChange={e => setPass(e.target.value)} />
            <input type='submit' />
        </Form>
    )
}