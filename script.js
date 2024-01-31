let grid_con = document.getElementById("grid_container");
let previous_id =null;
for(let i=1;i<=9;i++){
    let div_ele = document.createElement("div");
    div_ele.innerText =i;
    div_ele.id=i;
    grid_con.appendChild(div_ele);
    div_ele.classList.add("border_class");
    div_ele.classList.add("grid_item");
}
let form_ele = document.querySelector("#form");
form_ele.addEventListener("submit",function fun(event){
    event.preventDefault();
    let input_id = form_ele.input_id.value;
    let color = form_ele.color.value;
    if(previous_id){
        document.getElementById(previous_id).style.backgroundColor = "transparent";
    }
    previous_id =input_id;
    let selected_id = document.getElementById(input_id);
    selected_id.style.backgroundColor = color;
})