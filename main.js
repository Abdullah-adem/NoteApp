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
const addNote = (t,n) => {

    notes.innerHTML +=
    `  <div class="note">
            <h1 class="title-text" id="title-text">${t}</h1>
            <p class="note-blog">${n}</p>
            <i class="fa fa-trash"></i>
        </div>`;
        title.value = ''; noteText.value = '';


}

noteArea.addEventListener("click", showNoteArea);

document.addEventListener('click',(event)=>{
    let isclicked= noteArea.contains(event.target);
    if(!isclicked){
       hideNoteArea();


       if(title.value.length === 0 && noteText.value.length ===0){
         return;
       }else{
        addNote(title.value, noteText.value);
       }
      



       
    }
})