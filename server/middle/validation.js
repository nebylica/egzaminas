
module.exports = {
    checkUserData: (req, res, next) => {

        const {name, age, email, password} = req.body

        const errorMsg = (msg) => {
            return res.send({
                error: true,
                msg
            })
        }

        if(typeof name !== 'string' || name.length === 0) return errorMsg('Įveskite vartotojo vardą.')
        if(typeof age !== 'number' || age === 0) return errorMsg('Įveskite vartotojo amžių.')
        if(age > 120) return errorMsg('Neteisingas vartotojo amžių.')
        if(typeof email !== 'string' || email.length === 0) return errorMsg('Įveskite vartotojo el.paštą.')
        if(!email.includes('@')) return errorMsg('Neteisingas vartotojo el.paštas, į el.paštą tur įeiti "@", "." simboliai.')
        if(!email.includes('.')) return errorMsg('Neteisingas vartotojo el.paštas, į el.paštą tur įeiti "@", "." simboliai.')
        if(typeof password !== 'string' || password.length === 0) return errorMsg('Įveskite vartotojo slaptažodį.')
        if(password.length < 6) return errorMsg('Vartotojo slaptažodis tu būti ne trumpesnis nei 6 simboliai.')

        next()
    }

}