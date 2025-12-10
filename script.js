let name = document.querySelector('#name');
let secondname = document.querySelector('#secondname');
let login = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

function User(name, secondname, login, password) {
    this.name = name;
    this.secondname = secondname;
    this.login = login;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

submit.addEventListener('click', (e) => {
    e.preventDefault(); // не даём форме перезагрузиться

    const nameUser = name.value.trim();
    const secondnameUser = secondname.value.trim();
    const loginUser = login.value.trim();
    const passwordUser = password.value.trim();

    // Проверка заполнения
    if (!nameUser || !secondnameUser || !loginUser || !passwordUser) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    // 1. Загружаем старых пользователей
    let users = JSON.parse(localStorage.getItem('users')) || {};

    // Создаём нового
    const user = new User(nameUser, secondnameUser, loginUser, passwordUser);

    // Генерируем ID
    const userId = 'User' + createId(users);

    // Добавляем в объект
    users[userId] = user;

    // 2. Сохраняем всех пользователей
    localStorage.setItem('users', JSON.stringify(users));

    // 3. Сохраняем текущего юзера
    localStorage.setItem('currentUser', JSON.stringify(user));

    alert(`${nameUser}, вы успешно зарегистрировались!`);
});