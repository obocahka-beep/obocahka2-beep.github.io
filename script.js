let name = document.querySelector('#name');
let secondname = document.querySelector('#secondname');
let login = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
    e.preventDefault(); // чтобы не перезагружало страницу

    const firstnameUser = name.value.trim();
    const secondnameUser = secondname.value.trim();
    const loginUser = login.value.trim();
    const passwordUser = password.value.trim();

    if (!firstnameUser || !secondnameUser || !loginUser || !passwordUser) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    // Загружаем массив пользователей
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Добавляем нового пользователя (в формате массива!)
    users.push({
        login: loginUser,
        password: passwordUser,
        firstname: firstnameUser,
        secondname: secondnameUser
    });

    // Сохраняем обратно
    localStorage.setItem("users", JSON.stringify(users));

    // Можно сохранить текущего пользователя
    localStorage.setItem("currentUser", JSON.stringify({
        login: loginUser,
        firstname: firstnameUser,
        secondname: secondnameUser
    }));

    alert(`${firstnameUser}, вы успешно зарегистрировались!`);
});