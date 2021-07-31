function askName() {
    let name = prompt("Adınızı giriniz: ");
    document.getElementById("myName").innerText = name.toUpperCase();
    document.getElementById("myName").classList.add("text-color");
}

function displayTime() {
    let date = new Date();
    let currentDate = date.getDate()+'-'+(date.getMonth()+1)+'-'+ date.getFullYear();

    if(date.getDate()%2 == 0) {
        document.body.style.backgroundColor = "black";
    }
    else {
        document.body.style.backgroundColor = "black";
    }
    
    document.getElementById("myClock").innerText = currentDate;
    document.getElementById("myClock").classList.add("text-color");
}

askName();
displayTime();
