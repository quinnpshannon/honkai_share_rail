import styled from 'styled-components'
const Form = styled.form`
display: flex;
flex-direction: column;
margin-right: 10px;`
export default function Login() {
    function handleLogin(e){
        e.preventDefault();
        console.log('Logged In!')
    }
    return (
        <Form onSubmit={handleLogin}>
            <label htmlFor="userName" autoComplete='username'>User Name:</label>
            <input type="text" id="userName" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
            <input type='submit' />
        </Form>
    )
}