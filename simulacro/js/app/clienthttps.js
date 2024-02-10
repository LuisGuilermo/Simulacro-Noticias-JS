export async function post (url, info){
    try{
        const reponse = await fetch(url,{
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body : JSON.stringify(info),
        });

        const date = await reponse.json()

        return date;
    } 
    catch (error){
        console.log(error);
    }

}


export async function get(url) {
    try {
        const response = await fetch(url);
        const date = await response.json();

        return date;
    } catch (error) {
        console.log(error);
    }
}


export async function deleteCategory(url) {
    try {
        const response = await fetch (url,{
            method:"DELETE",
        })
        const date = await response.json();
        return date;
    } catch (error) {
        console.log(error);
    }
}

export async function update(url,info){
    try {
        const response = await fetch(url,{
            method: "PUT",
            headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(info)
        })
        const date = await response.json()
        return date;
    } catch (error) {
        console.log(error);
    }
}
