import { URLCategory, URLNews } from "../../../app/app.js"
import { deleteCategory, get, post, update } from "../../../app/clienthttps.js"
import { printNews } from "./fuctionDom.js"

//selectores
const form = document.getElementById("formNews")
export const namenew = document.getElementById("nameNotice")
export const urlImg = document.getElementById("urlImage")
export const contentNews = document.getElementById("contentNotice")
export const idCate = document.getElementById("idCategory")
export const updateID = document.getElementById("updateNewsId")



//eventos


document.addEventListener("DOMContentLoaded",()=>{
    loadCategory()
    getNews()
})


form-addEventListener("submit",(event)=>{
    event.preventDefault()

    if(updateID.value){
        updateNew()
    }else{
        createNew()
    }
})


//funcionas

async function createNew() {
    const user = JSON.parse(localStorage.getItem("User"))

    if (!idCate.value) {
        console.log("La categoria es obligatoria");
        return;
    }

    const newCreate = {
        name:namenew.value,
        img:urlImg.value,
        categoryId: idCate.value,
        content:contentNews.value,
        userId:user.id,
        Date: new Date().toISOString().split("T")[0],
    }
    await post (URLNews,newCreate)
}

async function loadCategory() {
    const date = await get(URLCategory);
    date.forEach((categoria) => {
        const option = document.createElement("option");
        option.textContent=categoria.name
        option.value = categoria.id;
        idCate.appendChild(option);
    });
}

async function getNews() {
    const news = await get(`${URLNews}?_embed=category&_embed=user`);
    console.log(news);
    printNews(news)
}

export async function deleteNew(id){
    await deleteCategory(`${URLNews}/${id}`)
}

async function updateNew() {
    const user = JSON.parse(localStorage.getItem("User"))

    const newCreate = {
        name:namenew.value,
        img:urlImg.value,
        categoryId: idCate.value,
        content:contentNews.value,
        userId:user.id,
        Date: new Date().toISOString().split("T")[0],
    }
    await update(`${URLNews}/${updateID.value}`, newCreate)
}