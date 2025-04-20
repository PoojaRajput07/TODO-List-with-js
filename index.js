const inputvalue=document.getElementById("inputbox");
const maintodoelem=document.querySelector(".todo-list-elem");


const gettodolistfromlocal=()=>{
     return JSON.parse(localStorage.getItem("youtubetodolist"))
}
let localtodolist=gettodolistfromlocal()||[];
const addtododynamicelement=(curElem)=>{
    const divelem = document.createElement("div");
    divelem.classList.add("main-todo-div");
    divelem.innerHTML = `<li>${curElem}</li><button class="deletebtn">delete</button>`;
    maintodoelem.append(divelem);

    
}
function addtodo(event) {
    event.preventDefault();

    const todolistvalue = inputvalue.value.trim();
    inputvalue.value="";

if(todolistvalue!=""&&!localtodolist.includes(todolistvalue)) {
    localtodolist.push(todolistvalue);
    localtodolist = [...new Set(localtodolist)]; // set->contain only unique elemnt to use push we made it array []



    // it will amde array inside array
    // use spread operator   ...
    console.log(localtodolist);
    localStorage.setItem("youtubetodolist", JSON.stringify(localtodolist));

    addtododynamicelement(todolistvalue);
}


}
const addtolocalstorage=(localtodolist)=>{
    return localStorage.setItem("youtubetodolist",JSON.stringify(localtodolist));
}

const showtodolist=()=>{

    localtodolist.forEach((curElem)=>{
        addtododynamicelement(curElem);
    });

}
showtodolist();


const tododelete=(e)=>{
    let deleteitem=e.target.previousElementSibling.innerText;
    let parentElem=e.target.parentElement;

    // localtodolist=localtodolist.filter((curElem)=>{
    //   return curElem!=deleteitem.toLowerCase();

      localtodolist = localtodolist.filter((curElem) => {
        return curElem.toLowerCase() !== deleteitem.toLowerCase();
      });

    console.log(localtodolist);

addtolocalstorage(localtodolist);
parentElem.remove();
};


maintodoelem.addEventListener("click",(e)=>{
     e.preventDefault();
    // removetodoelement(e);
    tododelete(e);
    console.log(e.target);
})
document.querySelector(".btn").addEventListener("click",(event)=>{
    addtodo(event);
    addtolocalstorage(localtodolist);

});

