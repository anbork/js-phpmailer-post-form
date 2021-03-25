const form = document.querySelector("#form");

/*1. Создание переменной request. 
    XMLHttpRequest - Api, который предостваляет клиенту функциональность для обмена данными между клиентома и сервером 
*/
const request = new XMLHttpRequest();

/*2. Инициализируем запрос */
request.open("POST", "send.php", true);

// 3. Подписка на событие onreadystatechange и обработка его с помощью анонимной функции
request.addEventListener("readystatechange", function () {
  if (request.readyState === 4 && request.status === 200) {
    console.log("Сообщение отправлено");
    console.log(request);
  }
});

function send(event) {
  console.log("Отправка запроса");
  event.preventDefault();
  request.send(new FormData(form));
}

form.addEventListener("submit", send);
