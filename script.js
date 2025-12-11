let name = document.querySelector('#name');
let secondname = document.querySelector('#secondname');
let login = document.querySelector('#login');
let password = document.querySelector('#password');
let submit = document.querySelector('#submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();

    const firstnameUser = name.value.trim();
    const secondnameUser = secondname.value.trim();
    const loginUser = login.value.trim();
    const passwordUser = password.value.trim();

    if (!firstnameUser || !secondnameUser || !loginUser || !passwordUser) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({
        login: loginUser,
        password: passwordUser,
        firstname: firstnameUser,
        secondname: secondnameUser
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert(`${firstnameUser}, вы успешно зарегистрировались!`);
    window.location.href = "login.html";
});
