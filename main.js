let navBtn = document.getElementById("navBtn")
let list = document.getElementById("list")

list.style.display = "none"

let init = 0

function display(){
    init++
    if(init == 1) {
        list.style.display = "block"
    }else if(init == 2){
        list.style.display = "none"
        location.reload()
    }
}