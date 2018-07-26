const fs                =require("fs");

// ADD note ========================================
var addNote =(title,body)=>{
  var notes=fetchNotes()
  var duplicateNotes = notes.filter(item=>item.title==title)
  if(duplicateNotes==0){
    let note={title, body};
    notes.push(note);
    saveNotes(notes)
    return note
  }
}
// DELETE note ======================================
var deleteNote=(title)=>{
  var notes=fetchNotes();
  let newNotes=notes.filter(note=>note.title!==title);
  saveNotes(newNotes)
  if(newNotes.length!==notes.length){
  debugger
  return newNotes
  }
}
// GET note ========================================

var getNote = (title)=>{
  let notes=fetchNotes();
  let note=notes.filter(item=>item.title==title)
  debugger;
  if(note){return note[0]}
}
// GET note ========================================
var getAll =()=>{
return fetchNotes()
}
//====================================================== EXPORTS MODULES
module.exports={
  addNote,
  deleteNote,
  getNote,
  getAll
}
//====================================================== HELPER FUNCTIONS
var fetchNotes=()=>{
  try{
    return JSON.parse(fs.readFileSync("data.json"));
  } catch(e) {
    return []
  }
}
var saveNotes=(notes)=>{
  fs.writeFileSync("data.json",JSON.stringify(notes))
}
