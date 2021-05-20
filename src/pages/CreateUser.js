import {useRef, useState} from 'react';
import http from "../plugins/Fetch"

function CreateUser() {
    const name = useRef()
    const age = useRef()
    const email = useRef()
    const password = useRef()

    const [errorMsg, setErrorMsg] = useState('')

    const checkUserData = (data) => {
        const {name, age, email, password} = data

        const errorMsg = (msg) => {
            return {
                error: true,
                msg
            }
        }

        if(typeof name !== 'string' || name.length === 0) return errorMsg('Įveskite vartotojo vardą.')
        if(typeof age !== 'number' || age === 0) return errorMsg('Įveskite vartotojo amžių.')
        if(age > 120) return errorMsg('Neteisingas vartotojo amžių.')
        if(typeof email !== 'string' || email.length === 0) return errorMsg('Įveskite vartotojo el.paštą.')
        if(!email.includes('@')) return errorMsg('Neteisingas vartotojo el.paštas, į el.paštą tur įeiti "@", "." simboliai.')
        if(!email.includes('.')) return errorMsg('Neteisingas vartotojo el.paštas, į el.paštą tur įeiti "@", "." simboliai.')
        if(typeof password !== 'string' || password.length === 0) return errorMsg('Įveskite vartotojo slaptažodį.')
        if(password.length < 6) return errorMsg('Vartotojo slaptažodis tu būti ne trumpesnis nei 6 simboliai.')

        return {
            error: false,
            msg: 'Vartotojas sėkmingai sukurtas!'
        }
    }


    const createUser = () => {
        const userData = {
            name: name.current.value,
            age: Number(age.current.value),
            email: email.current.value,
            password: password.current.value,
        }

        const validator = checkUserData(userData)

        if (!validator.error) {

            setErrorMsg(validator.msg)
        } else {
            setErrorMsg(validator.msg)
        }
    }

    return (
        <div className='inputsForm d-flex-center column'>
            <input ref={name} type="text" placeholder="Vardas"/>
            <input ref={age} type="number" placeholder="Amžius"/>
            <input ref={email} type="email" placeholder="El. paštas"/>
            <input ref={password} type="password" placeholder="Slaptažodis"/>
            <small style={{color: "darkred"}}>{errorMsg}</small>
            <button type='submit' onClick={createUser}>SUKURTI NAUJĄ VARTOTOJĄ</button>
        </div>
    );
}

export default CreateUser;