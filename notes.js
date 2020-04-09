const fs = require('fs');
const chalk = require('chalk');


const addNote = (title,body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title == title);

    if(duplicateNote){
        notes.push({
            "title": title,
            "body": body
        });
        saveNotes(notes);
        console.log('New note added!');
    }else{
        console.log('Note title taken');
    }

    notes.push({
        "title": title,
        "body": body
    })
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON); 
    }catch(e){
        return [];
    }
}

const saveNotes = function (notes)
{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON)
}

const removeNote = function(title){
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length != notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'));
    }else{
        console.log(chalk.red.inverse('No note found'));
    }
    saveNotes(notesToKeep);
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title );
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse('No note was found'));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    loadNotes: loadNotes,
    readNote: readNote
};

