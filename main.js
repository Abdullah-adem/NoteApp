let noteArea = document.querySelector(".note-area");
let noteText = document.querySelector(".note-text");
let title = document.querySelector(".title");
let note = document.querySelector(".note");
let notes = document.querySelector("#notes");

const showNoteArea= () => {
noteText.style ='display: block';
noteArea.classList.add('note-now');
title.setAttribute('placeholder','title');
title.style = 'font-size:20px';
}
const hideNoteArea = ()=>{
    noteText.style = 'display:none';
    noteArea.classList.remove('note-now');
}

noteArea.addEventListener("click", showNoteArea);

document.addEventListener('click',(event)=>{
    let isclicked= noteArea.contains(event.target);
    if(!isclicked){
       hideNoteArea();
    }
})