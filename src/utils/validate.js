export const validateDataSignIn = (email, password) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!isEmailValid) return '❗Email Id is invalid'

    const isPasswordValid =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
            password
        )
    if (!isPasswordValid) return '❗Password is invalid'

    return null
}

export const validateDataSignUp = (name, email, password) => {
    const isNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)
    if (!isNameValid) return '❗Enter a valid name'

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!isEmailValid) return '❗Email Id is invalid'

    const isPasswordValid =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
            password
        )
    if (!isPasswordValid) return '❗Password is invalid'

    return null
}
