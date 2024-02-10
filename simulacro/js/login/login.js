import {URLUser} from "../app/app.js"

//selectores

const form = document.querySelector("#formLogin");
const formEmail = document.getElementById("email");
const formPassword = document.getElementById("password");

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    login()
})

//funciones

async  function login(){
    const response = await fetch(`${URLUser}?email=${formEmail.value}`)
    const date = await response.json()
    if (!date) {
        console.error("Email no resgitrado");
        return;
    }
    
    if(date[0].password !== formPassword.value){
        console.error("Contraseña incorrecta");
        return;
    }
    console.log("Todo correcto");

    localStorage.setItem("User",JSON.stringify(date[0]));
    window.location.href="administrator.html"
}