import { URLCategory } from "../../app/app.js"
import {deleteCategory, get, post, update} from "../../app/clienthttps.js"
import { edit, printCategories } from "./Dom.js"

export const form = document.getElementById("formCategories")
export const nameCategory = document.getElementById("nameCategory")
export const nameDescription = document.getElementById("descriptionCategory")




//eventos
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    if(edit.value){
        updateCategory(edit.value)
    }else{
        saveCategory()
    }
})

document.addEventListener("DOMContentLoaded",()=>{
    getCategories()
})


//funciones

async function saveCategory() {
    
    const newCategory = {
        name: nameCategory.value,
        description: nameDescription.value
    };

    await post (URLCategory,newCategory)
}

async function getCategories(){
    const date = await get(URLCategory)
    printCategories(date)
}

export async function deleteCategori(id) {
    console.log("eliminando id", id);

    await deleteCategory(`${URLCategory}/${id}`); 
}

export async function updateCategory(id){
    const CategoryUpdate={
        name: nameCategory.value,
        description:nameDescription.value
    }
    await update( `${URLCategory}/${id}`, CategoryUpdate)
}