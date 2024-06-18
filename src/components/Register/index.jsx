import styled from 'styled-components'
const Form = styled.form`
display: flex;
flex-direction: column`
export default function Register() {
    function handleRegister(e) {
       e.preventDefault();
       console.log('We did it!')
    }
    return (
        <Form onSubmit={handleRegister}>
            <label htmlFor="regUserName">User Name:</label>
            <input type="text" id="regUserName" />
            <label htmlFor="regPassword">Password:</label>
            <input type="password" id="regPassword" />
            <label htmlFor="regrtPassword">Retype Password:</label>
            <input type="password" id="regrtPassword" />
            <label htmlFor="UID">UID:</label>
            <input type="number" id="UID" />
            <input type='submit' />
        </Form>
    )
}