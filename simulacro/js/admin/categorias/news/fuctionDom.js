import { clean } from "../../../utils/clean.js";
import { contentNews, deleteNew, idCate, namenew, updateID, urlImg } from "./index.js";

const tbody = document.querySelector("#news-tbody")
const btnNews = document.getElementById("btnNews")


export function printNews(info) {
    info.forEach(news => {
        clean(tbody)
        const tr = document.createElement("tr")
        const tdImg = document.createElement("td")
        const tdName = document.createElement("td")
        const tdContent = document.createElement("td")
        const tdDate = document.createElement("td")
        const tdUser = document.createElement("td")
        const tdCategory = document.createElement("td")
        const tdActions = document.createElement("td")

        const imagen=document.createElement('img')
        imagen.src = news.imagen;
        imagen.width="50"
        imagen.height="50";
        imagen.classList.add("rounded-circle")

        const btnEdit = document.createElement("button")
        const btnEliminar = document.createElement("button")

        btnEdit.classList.add("btn","btn-primary")
        btnEliminar.classList.add("btn","btn-danger")

        btnEdit.textContent="Editar"
        btnEliminar.textContent="Eliminar"

        btnEdit.addEventListener("click",()=>{
            loadInfoNew(news)
        })

        btnEliminar.addEventListener("click",()=>{
            deleteNew(news.id)
        })

        tdName.textContent = news.name
        tdContent.textContent = news.content
        tdDate.textContent=news.Date
        tdUser.textContent=news.user.name
        tdCategory.textContent=news.category.name

        tdImg.appendChild(imagen)
        tdActions.appendChild(btnEdit)
        tdActions.appendChild(btnEliminar)

        tr.appendChild(tdImg)
        tr.appendChild(tdName)
        tr.appendChild(tdContent)
        tr.appendChild(tdDate)
        tr.appendChild(tdUser)
        tr.appendChild(tdCategory)
        tr.appendChild(tdActions)

        tbody.appendChild(tr)
    });
}

function loadInfoNew(newsTemp) {
    namenew.value = newsTemp.name;
    urlImg.value = newsTemp.img;
    contentNews.value = newsTemp.content;
    idCate.value = newsTemp.categoryId;
    updateID.value = newsTemp.id;
    btnNews.click()
}