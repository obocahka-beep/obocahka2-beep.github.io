let editing = false;

window.addEventListener("DOMContentLoaded", () => {
    const fields = ["name", "status", "team", "email"];
    fields.forEach(id => {
        const elem = document.getElementById(id);
        if (!elem) return;
        const saved = localStorage.getItem(id);
        if (saved) {
            elem.textContent = saved;
            elem.dataset.value = saved;
        }
    });
});

document.getElementById("editBtn").onclick = function () {
    let name = document.getElementById("name");
    let status = document.getElementById("status");
    let team = document.getElementById("team");
    let email = document.getElementById("email");

    if (!editing) {
        name.innerHTML = `<input id="nameInput" value="${name.dataset.value || name.textContent}">`;
        status.innerHTML = `<input id="statusInput" value="${status.dataset.value || status.textContent}">`;
        team.innerHTML = `<input id="teamInput" value="${team.dataset.value || team.textContent}">`;
        email.innerHTML = `<input id="emailInput" value="${email.dataset.value || email.textContent}">`;

        this.textContent = "Сохранить";
        editing = true;
    } else {
        let nameVal = document.getElementById("nameInput").value;
        let statusVal = document.getElementById("statusInput").value;
        let teamVal = document.getElementById("teamInput").value;
        let emailVal = document.getElementById("emailInput").value;

        name.dataset.value = nameVal;
        status.dataset.value = statusVal;
        team.dataset.value = teamVal;
        email.dataset.value = emailVal;

        localStorage.setItem("name", nameVal);
        localStorage.setItem("status", statusVal);
        localStorage.setItem("team", teamVal);
        localStorage.setItem("email", emailVal);

        name.textContent = nameVal;
        status.textContent = statusVal;
        team.textContent = teamVal;
        email.textContent = emailVal;

        this.textContent = "Редактировать профиль";
        editing = false;
    }
};

document.getElementById("changeAvatarBtn").onclick = function () {
    document.getElementById("avatarInput").click();
};

document.getElementById("avatarInput").onchange = function (event) {
    let file = event.target.files[0];
    if (!file) return;

    let reader = new FileReader();

    reader.onload = function (e) {
        let avatar = document.getElementById("avatar");
        avatar.src = e.target.result;

        localStorage.setItem("userAvatar", e.target.result);
    };

    reader.readAsDataURL(file);
};

window.addEventListener("load", () => {
    let savedAvatar = localStorage.getItem("userAvatar");
    if (savedAvatar) {
        document.getElementById("avatar").src = savedAvatar;
    }
});


document.getElementById("yearSelect").addEventListener("change", function() {
    const year = this.value;
    const container = document.getElementById("materialsContainer");
    container.innerHTML = "";

    if (!year || !hackathonMaterials[year]) return;

    const data = hackathonMaterials[year];

    function createAccordionSection(title, content) {
        const section = document.createElement("div");
        section.className = "accordion-section";

        const header = document.createElement("button");
        header.className = "accordion-header";
        header.textContent = title;

        const body = document.createElement("div");
        body.className = "accordion-body";

        if (Array.isArray(content)) {
            if (title === "Фотографии") {
                content.forEach(photo => {
                    const img = document.createElement("img");
                    img.src = photo;
                    img.alt = `${year} Фото`;
                    img.className = "accordion-photo";
                    body.appendChild(img);
                });
            } else {
                const ul = document.createElement("ul");
                content.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item;
                    ul.appendChild(li);
                });
                body.appendChild(ul);
            }
        }

        header.addEventListener("click", () => {
            body.style.display = body.style.display === "block" ? "none" : "block";
        });

        section.appendChild(header);
        section.appendChild(body);
        return section;
    }

    container.appendChild(createAccordionSection("Задания", data.tasks));
    container.appendChild(createAccordionSection("Результаты", data.results));
    container.appendChild(createAccordionSection("Фотографии", data.photos));
});
const currentHackathonMaterials = [
    { name: "Задание 1", url: "current_task1.pdf" },
    { name: "Задание 2", url: "current_task2.pdf" },
    { name: "Ответы на задания", url: "current_answers.zip" },
    { name: "Презентации", url: "current_presentations.pdf" }
];

function renderCurrentHackathonMaterials() {
    const container = document.getElementById("currentHackathonMaterials");
    container.innerHTML = "";
    currentHackathonMaterials.forEach(item => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = item.url;
        link.textContent = item.name;
        link.target = "_blank";
        li.appendChild(link);
        container.appendChild(li);
    });
}

renderCurrentHackathonMaterials();

const hackathonMaterials = {
    "2021": { tasks: ["Задание 1", "Задание 2"], results: ["1 место — Команда A", "2 место — Команда B"], photos: ["2021_1.jpg", "2021_2.jpg"] },
    "2022": { tasks: ["Задание A", "Задание B"], results: ["1 место — Команда X", "2 место — Команда Y"], photos: ["2022_1.jpg", "2022_2.jpg"] },
    "2023": { tasks: ["Задание Alpha", "Задание Beta"], results: ["1 место — Команда M", "2 место — Команда N"], photos: ["2023_1.jpg", "2023_2.jpg"] }
};

document.getElementById("yearSelect").addEventListener("change", function() {
    const year = this.value;
    const container = document.getElementById("materialsContainer");
    container.innerHTML = "";

    if (!year || !hackathonMaterials[year]) return;
    const data = hackathonMaterials[year];

    function createAccordionSection(title, content) {
        const section = document.createElement("div");
        section.className = "accordion-section";

        const header = document.createElement("button");
        header.className = "accordion-header";
        header.textContent = title;

        const body = document.createElement("div");
        body.className = "accordion-body";

        if (Array.isArray(content)) {
            if (title === "Фотографии") {
                content.forEach(photo => {
                    const img = document.createElement("img");
                    img.src = photo;
                    img.alt = `${year} Фото`;
                    img.className = "accordion-photo";
                    body.appendChild(img);
                });
            } else {
                const ul = document.createElement("ul");
                content.forEach(item => {
                    const li = document.createElement("li");
                    li.textContent = item;
                    ul.appendChild(li);
                });
                body.appendChild(ul);
            }
        }

        header.addEventListener("click", () => {
            body.style.display = body.style.display === "block" ? "none" : "block";
        });

        section.appendChild(header);
        section.appendChild(body);
        return section;
    }

    container.appendChild(createAccordionSection("Задания", data.tasks));
    container.appendChild(createAccordionSection("Результаты", data.results));
    container.appendChild(createAccordionSection("Фотографии", data.photos));
});

const materialsBtn = document.getElementById("showMaterialsBtn");
const currentBlock = document.getElementById("currentHackathonBlock");
const pastBlock = document.getElementById("materialsBlock");

currentBlock.style.display = "none";
pastBlock.style.display = "none";

let materialsVisible = false;

materialsBtn.addEventListener("click", () => {
    materialsVisible = !materialsVisible;

    if (materialsVisible) {
        currentBlock.style.display = "block";
        pastBlock.style.display = "block";
        materialsBtn.textContent = "Скрыть материалы";
    } else {
        currentBlock.style.display = "none";
        pastBlock.style.display = "none";
        materialsBtn.textContent = "Материалы хакатона";
    }
});