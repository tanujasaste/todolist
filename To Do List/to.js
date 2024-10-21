const inputbox = document.getElementById("task");
const list = document.getElementById("tasklist");

function addtask(){
    if(inputbox.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("first");
        savedata();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false)

//to display it or store task whenever i open browser 

function savedata(){
    localStorage.setItem("data", list.innerHTML); //data is the key under which the data will be stored.
}

function showtask(){
    list.innerHTML = localStorage.getItem("data");
}

showtask();