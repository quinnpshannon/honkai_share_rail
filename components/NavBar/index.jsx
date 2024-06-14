import {Link} from 'react-router-dom'
import styled from 'styled-components'
const Nav = styled.nav`
display: flex;
justify-content: space-between;`
export default function NavBar () {
 return (
    <Nav>
        <Link to='/'>Home</Link>
        <Link to='/team'>Team</Link>
        <Link to='/characters'>Characters</Link>
    </Nav>
 )   
}