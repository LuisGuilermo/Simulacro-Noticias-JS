import { clean } from "../../utils/clean.js";
import { deleteCategori, form, nameCategory, nameDescription } from "./categorias.js";

const categorias = document.getElementById("categorias-tbody")
export const edit = document.getElementById("idCategoryUpdate")
export const btnedithtml = document.getElementById("btnAddCategory")

export function printCategories(categoria) {
    clean(categorias)

    categoria.forEach(category => {
        const tr = document.createElement("tr");
        const tdID = document.createElement("td");
        const tdName = document.createElement("td");
        const tdDescription = document.createElement("td");
        const tdButtons = document.createElement("td");

        const btnEdit = document.createElement("button");
        const btnDelete = document.createElement("button");


        btnEdit.textContent = "Editar";
        btnDelete.textContent = "Eliminar";

        btnDelete.classList.add("btn","btn-danger");
        btnEdit.classList.add("btn","btn-primary");

        btnDelete.addEventListener("click",()=>{
            deleteCategori(category.id)
        })

        btnEdit.addEventListener("click",()=>{
            loadinforcategory(category)
        })

        tdID.textContent =  category.id;
        tdName.textContent = category.name;
        tdDescription.textContent = category.description;

        tdButtons.appendChild(btnDelete);
        tdButtons.appendChild(btnEdit)

        tr.appendChild(tdID);
        tr.appendChild(tdName);
        tr.appendChild(tdDescription);
        tr.appendChild(tdButtons);
        categorias.appendChild(tr);
    });
}


function loadinforcategory(categorya) {
    nameCategory.value= categorya.name;
    nameDescription.value= categorya.description;
    edit.value = categorya.id;
    btnedithtml.click();
}
