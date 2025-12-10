document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("showUserBtn");

    btn.addEventListener("click", () => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        if (!currentUser) {
            console.log("Пользователь не найден");
            return;
        }

        console.log(`firstname: ${currentUser.firstname}, secondname: ${currentUser.secondname}`);
        alert("Вы зарегестрировались на хакатон!")
    });
});
document.addEventListener("DOMContentLoaded", () => { 
    const btn = document.getElementById("showUserBtn1");

    btn.addEventListener("click", () => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        if (!currentUser) {
            console.log("Пользователь не найден");
            return;
        }

        console.log(`firstname: ${currentUser.firstname}, secondname: ${currentUser.secondname}`);
        alert("Вы зарегестрировались на хакатон!")
    });
});
