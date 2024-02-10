(()=>{
    const user = localStorage.getItem("User")

    if (!user) {
        window.location.href = "index.html"
    }
})();