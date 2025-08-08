// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

let getUserButton = document.getElementById('getUserButton')
let userCity = document.getElementById('userCity')

function getUser(event){
    event.preventDefault()
    let userNameInputValue = document.getElementById('userNameInput').value
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for(let user of users){
            if(user.username == userNameInputValue){
                userCity.innerHTML = user.address.city
                return
             } else{
                userCity.innerHTML = 'No user found!'
            }
        }
    })
}

getUserButton.addEventListener('click', getUser)
