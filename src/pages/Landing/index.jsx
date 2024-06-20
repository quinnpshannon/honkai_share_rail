import styled from 'styled-components'
import Login from '../../components/Login'
import Register from '../../components/Register'
import Bio from '../../components/Bio'
const Container = styled.div`
display: flex;
justify-content: center;`
export default function Landing({ userObj, setUserObj }) {
    if (userObj.username) {
        return (
            <>
                <Container>
                    <Bio userObj={userObj} setUserObj={setUserObj}/>
                </Container>
            </>
        )
    }
    return (
        <>
            <Container>
                <Login setUserObj={setUserObj} />
                <Register setUserObj={setUserObj} />
            </Container>
        </>
    )
}