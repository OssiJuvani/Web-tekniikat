document.getElementById("btn").addEventListener("click", function() {
   
    let showNote = document.createElement("div");

    showNote.classList.add("showNote")


    showNote.innerHTML = '<h2>' + new Date().toLocaleString()  + ' (' + 
    document.getElementById("name").value + ")" + '</h2><p>' + 
    document.getElementById("note").value + '</p>';
    
    if (document.getElementById("important").checked) {
        showNote.style.border = "2px solid red";
    } 
     
    document.body.appendChild(showNote);
    
  
});




  