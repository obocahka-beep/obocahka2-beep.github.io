let name = document.querySelector('#name');
let secondname = document.querySelector('#secondname');
let login = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

let users = {};

function User(name, secondname, login, password) {
    this.name = name;
    this.login = login;
    this.secondname = secondname;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListener('click', () => {
    const nameUser = name.value;
    const secondnameUser = secondname.value;
    const loginUser = login.value;
    const passwordUser = password.value;

    const user = new User(nameUser, secondnameUser, loginUser, passwordUser);

    if (!nameUser || !secondnameUser || !loginUser || !passwordUser) {
    alert("Пожалуйста, заполните все поля!");
    return;
    }
    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);
    
    localStorage.setItem('currentUser', JSON.stringify(user));

    alert(`${nameUser}, вы успешно зарегестрировались`)
})