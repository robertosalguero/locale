let delt = document.querySelector(".del");

function del() {
    let tar=evt.target;
    console.log(tar);
    evt.stopPropagation();
}