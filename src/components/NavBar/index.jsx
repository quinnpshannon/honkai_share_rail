import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Nav = styled.nav`
display: flex;
justify-content: space-between;`
export default function NavBar({lang, setLang, refer}) {
    const keys = Object.keys(refer)
    return (
        <Nav>
            {/* This will be a Logo in the future */}
            <Link to='/'>Home</Link>
            {/* This will be where the Settings live */}
            <Link to='/profile'>Profile</Link>
            {/* A link to your friend's pages. You can only see them if they are on your friends list! */}
            <Link to='/friends'>Friends</Link>
            {/* A place where you can build teams */}
            <Link to='/team'>Teams</Link>
            {/* A place where you can click on characters to add them to your list
                and also set up their stats */}
            <Link to='/characters'>Characters</Link>
            {/* This should probably move to the settings page */}
            <div>
                <label htmlFor="language">Language:</label>
                <select id="language" value={lang} onChange={(e) => setLang(e.target.value)}>
                {keys.map(l => (
                    <option value={l} key={l}>{l}</option>
                ))}
                </select>
            </div>
        </Nav>
    )
}