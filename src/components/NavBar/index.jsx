import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {setCurrent} from '../../slices/languageSlice'
import {setRoster, setTeam} from '../../slices/characterSlice'
import {storeUser} from '../../slices/userSlice'
const Nav = styled.nav`
display: flex;
justify-content: space-between;`
export default function NavBar({userObj, setUserObj}) {
    const dispatch = useDispatch();
    if(userObj.username){
        dispatch(storeUser(userObj));
    }
    function logOut(){
        setUserObj({username:''});
        dispatch(setCurrent('en'));
        dispatch(setRoster([]));
        dispatch(setTeam([]));
    }
    return (
        <Nav>
            {/* This will be where the Settings live */}
            <Link to='/'>{userObj.username?userObj.displayName:'Profile'}</Link>
            {/* <Link to='/profile'>Profile</Link> */}
            {/* A link to your friend's pages. You can only see them if they are on your friends list! */}
            {/* <Link to='/friends'>Friends</Link> */}
            {/* A place where you can build teams */}
            <Link to='/team'>Teams</Link>
            {/* A place where you can click on characters to add them to your list
                and also set up their stats */}
            <Link to='/characters'>Characters</Link>
            <button onClick={logOut}>{userObj.username?'Logout':'Clear'}</button>
            {/* This should probably move to the settings page */}
        </Nav>
    )
}