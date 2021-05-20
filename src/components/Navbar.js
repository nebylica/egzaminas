import {Link, useLocation} from "react-router-dom";
import {useState, useEffect} from 'react'

function Navbar() {

    let path = useLocation()
    const [oneColor, setOneColor] = useState('white')
    const [twoColor, setTwoColor] = useState('white')

    useEffect(() => {
        let setColor = (url, setCol) =>{
            path.pathname === url ? setCol('#ffffff') : setCol('#e2e2e2')
        }
        setColor('/', setOneColor)
        setColor('/createUser', setTwoColor)
    }, [path])

    return (
        <div className='navbar'>
            <Link style={{color: oneColor}} to='/'>Visi vartotojai</Link>
            <Link style={{color: twoColor}} to='/createUser'>Sukurti vartotoją</Link>
        </div>
    );
}

export default Navbar;