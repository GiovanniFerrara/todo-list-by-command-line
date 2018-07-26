const fs                =require("fs");
const os                =require("os");
const _                 =require("lodash");
const yargs             =require ("yargs");

const notes             =require("./notes");
//DESTRUCTURING OBJECT
var {addNote, deleteNote,getNote,getAll}=notes;
// YARGS VARIABLE

var title = {
    describe:'title of note',
    demand:true,
    alias:'t'
  }
var body = {
    describe:'body of note',
    demand:true,
    alias:'b'
  }

const argv = yargs
.command('add', 'add a new note',{title,body})
.command('delete', 'delete a note',{title})
.command('get', 'get a note',{title})
.command('list','list all the notes')
.help()
.argv;
//
// console.log(argv.title,argv.body)
var command=argv._[0]


switch(command){

  case "add":
    let note=addNote(argv.title,argv.body);
    if(note){console.log(note.title + " created!")}else{console.log("Another note with the same title exists already")};
  break

  case "delete":
    var message = deleteNote(argv.title);
    console.log(message? "note removed" : "this note does not exist")
  break

  case "get":
    var noteFound = getNote(argv.title);
    console.log(noteFound? noteFound : "This note doesn't exist in the database");
  break

  case "list":
    var notesAll = getAll(argv.title);
    notesAll.forEach(item=>console.log(item))
  break
}
