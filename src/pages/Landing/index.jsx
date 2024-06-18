import styled from 'styled-components'
import Login from '../../components/Login'
import Register from '../../components/Register'
const Container = styled.div`
display: flex;
justify-content: center;`
export default function Landing (refer, lang) {
    return (
    <>
        <h1>Landing</h1>
        <Container>
            <Login />
            <Register />
        </Container>
    </>
    )   
}