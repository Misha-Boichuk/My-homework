//ДЗ 33. Таблиця
// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

const body = document.querySelector("body");
const table = document.createElement("table");

for (let i = 0; i < 10; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
        const td = document.createElement("td");
        td.innerHTML = i * 10 + j + 1;
        tr.append(td); 
    }
    table.append(tr);
}
body.append(table);