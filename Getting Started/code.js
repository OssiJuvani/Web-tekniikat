function clickMe () {
    let hideTitle = document.querySelector("h1")
    
    
    if (hideTitle.style.display === "none") {
        hideTitle.style.display = "block";
    } else {
        hideTitle.style.display = "none";
        
    }


}

function hideText() {
    let showText = document.getElementById("hidden");
    document.getElementById("hidden").style.display = "none";
    

}
