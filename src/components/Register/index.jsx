import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRoster } from '../../slices/characterSlice';
import styled from 'styled-components'
import axios from 'axios';
const Form = styled.form`
display: flex;
flex-direction: column`


// const baseURL = 'https://honkai-share-rail-server.onrender.com/auth/signup'
const baseURL = 'http://localhost:4000/auth/signup'

    export default function Register({setUserObj}) {
        const dispatch = useDispatch();
        const [userName,setUserName] = useState('');
        const [pass,setPass] = useState('');
    const [email,setEmail] = useState('');
    const [secondPass,setSecondPass] = useState('');
    const [UID,setUID] = useState('');
    let err;
    async function handleRegister(e) {
        e.preventDefault();
        if(pass!==secondPass){
            setPass('');
            setSecondPass('');
            return;
        }
        const sendBody = {"username": userName, "password": pass, "UID": UID, "email": email};
        err = sendBody;
        const response = await axios.post(baseURL, sendBody);
        console.log(response);
        const data = await response.data;
        setUserObj(await data);
        dispatch(setRoster(data.characters));
    }
    return (
        <Form id='register' onSubmit={handleRegister}>
            <label htmlFor="regUserName">User Name:</label>
            <input type="text" id="regUserName" value={userName} onChange={e => setUserName(e.target.value)} required minLength={3} maxLength={20} />
            <label htmlFor="regEmail">Email:</label>
            <input type="email" id="regEmail" value={email} onChange={e => setEmail(e.target.value)} required />
            <label htmlFor="regPassword">Password:</label>
            <input type="password" id="regPassword" value={pass} onChange={e => setPass(e.target.value)} required minLength={8} maxLength={12}/>
            <label htmlFor="regrtPassword">Retype Password:</label>
            <input type="password" id="regrtPassword" value={secondPass} onChange={e => setSecondPass(e.target.value)} required  minLength={8} maxLength={12} />
            <label htmlFor="UID">UID:</label>
            <input type="number" id="UID" value={UID} onChange={e => setUID(e.target.value)} required />
            {err && <p id='error'>{err}</p>}
            <input type='submit' />
        </Form>
    )
}