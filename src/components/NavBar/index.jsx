import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Nav = styled.nav`
display: flex;
justify-content: space-between;`
export default function NavBar({lang, setLang, refer}) {
    const keys = Object.keys(refer)
    return (
        <Nav>
            <Link to='/'>Home</Link>
            <Link to='/team'>Team</Link>
            <Link to='/characters'>Characters</Link>
            <div>
                <label htmlFor="language">Language:</label>
                <select name="language" value={lang} onChange={(e) => setLang(e.target.value)}>
                {keys.map(l => (
                    <option value={l} key={l}>{l}</option>
                ))}
                </select>
            </div>
        </Nav>
    )
}