const form = document.getElementById("form")
const nameInp = document.getElementById("name")
const surname = document.getElementById("surname")
const age = document.getElementById("age")
const nationality = document.getElementById("nationality")
const position = document.getElementById("position")
const experience = document.getElementById("experience")
const table = document.getElementById("tbody")

const users = []
let id = 0

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let newUser = {
        id: id,
        name: nameInp.value,
        surname: surname.value,
        age: age.value,
        nationality: nationality.value,
        position: position.value,
        experience: experience.value
    }
    id++
    users.push(newUser)
    renderUI(users);
    console.log(users)


})

const renderUI = (items) => {
    table.innerHTML = ""
    for (let i = 0; i < items.length; i++) {
        table.innerHTML += `
    <tr>
      <td>${i + 1}</td>
      <td>${items[i].name}</td>
      <td>${items[i].surname}</td>
      <td>${items[i].age}</td>
      <td>${items[i].nationality}</td>
      <td>${items[i].position}</td>
      <td>${items[i].experience}</td>
      <td><button onclick="editHandler(${users[i].id})" type="button" class="btn btn-success">Edit</button></td>
      <td><button onclick="deleteHandler(${users[i].id})" type="button" class="btn btn-danger">Delete</button></td>
    </tr>
        `
    }
}

const deleteHandler = (id) => {
    let confirmDelete = confirm("Are you sure you want to delete this user?")
    if (confirmDelete) {
        let target = users.find(x => x.id == id)
        let indexOfTarget = users.indexOf(target)
        users.splice(indexOfTarget, 1)
        renderUI(users)
    }
}

const editHandler = (id) => {
    let confirmEdit = confirm("Are you sure you want to edit this user?")
    if (confirmEdit) {
        let target = users.find(x => x.id == id)
        let newUserName = prompt("Enter the name:")
        let newUserSurname = prompt("Enter the surname:")
        target.name = newUserName
        target.surname = newUserSurname
        renderUI(users)
    }
}