
localStorage.setItem("users", JSON.stringify([
        { login: "admin", password: "1234" },
        { login: "test", password: "qwerty" }
    ]));

    document.addEventListener("DOMContentLoaded", () => {
    const loginInput = document.getElementById("loginInput");
    const passwordInput = document.getElementById("passwordInput");
    const loginBtn = document.getElementById("loginBtn");
    const rememberCheckbox = document.querySelector(".remember input[type='checkbox']");
    const errorMessage = document.getElementById("errorMessage");

    // Восстановление логина
    const savedLogin = localStorage.getItem("rememberLogin");
    if (savedLogin) {
        loginInput.value = savedLogin;
        rememberCheckbox.checked = true;
    }

    function showError(msg) {
        errorMessage.textContent = msg;
        errorMessage.classList.add("show");

        loginInput.classList.add("input-error");
        passwordInput.classList.add("input-error");
    }

    function clearError() {
        errorMessage.textContent = "";
        errorMessage.classList.remove("show");

        loginInput.classList.remove("input-error");
        passwordInput.classList.remove("input-error");
    }

    // Убираем ошибку при вводе
    loginInput.addEventListener("input", clearError);
    passwordInput.addEventListener("input", clearError);

    loginBtn.addEventListener("click", () => {
        const login = loginInput.value.trim();
        const password = passwordInput.value.trim();

        clearError();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(
            user => user.login === login && user.password === password
        );

        if (foundUser) {
            if (rememberCheckbox.checked) {
                localStorage.setItem("rememberLogin", login);
            } else {
                localStorage.removeItem("rememberLogin");
            }

            alert("Успешный вход!");
            // window.location.href = "main.html";
        } else {
            showError("Неправильное имя пользователя или пароль");
        }
    });
});