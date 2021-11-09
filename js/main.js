const authButton = document.querySelector('.button-auth')
const buttonOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')
const errorAuth = document.querySelector('.error-auth')
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')
const logInForm = document.getElementById('logInForm')
const inputLogin = document.getElementById('login')
const inputPassword = document.getElementById('password')

const login = (user) => {

    authButton.style.display = 'none'
    buttonOut.style.display = 'flex'
    userName.style.display = 'flex'

    userName.textContent = user.login
}

const logout = () => {
    authButton.style.display = 'flex'
    buttonOut.style.display = 'none'
    userName.style.display = 'none'

    userName.textContent = ''

    localStorage.removeItem('user')
}

authButton.addEventListener('click', (e) => {
    modalAuth.style.display = 'flex'
})

closeAuth.addEventListener('click', (e) => {
    modalAuth.style.display = 'none'
})

buttonOut.addEventListener('click', () => {
    logout()
})

logInForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    }
    if (user.login.trim()) {
        errorAuth.style.display = 'none'
        localStorage.setItem('user', JSON.stringify(user))
        login(user);
        modalAuth.style.display = 'none'
    } else {
        errorAuth.style.display = 'block'
    } 
})

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}