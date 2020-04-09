const notes = require('./notes.js')
const chalk = require('chalk');
const yargs = require('yargs');

//Customize yargs version

yargs.version('1.1.0');

// add

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
})

//list

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log(chalk.red.inverse('Listing all notes...'));
        console.log(chalk.green.inverse('                    '))
        var list = notes.loadNotes()
        list.forEach((note) => {
            console.log(chalk.blue.inverse('Title :'+note.title));
        });
        console.log();
    }
})

//read

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(argv){
        notes.readNote(argv.title);
    }
})

console.log(yargs.argv)