/// <reference path="../../../../typings/globals/angular/index.d.ts" />

import Note from './note.class';

export default class NoteManagerService {
  static $inject: Array<string> = [];

  private notes: Note[];

  constructor() {
    console.log('service constructor');
    this.notes = [];
    this.loadNotes();
  }

  public addNewNote(title: string, content: string) {
    this.notes.push(new Note(title, content));
    this.saveNotes();
  }

  public getNotes(): Note[] {
    return this.notes;
  }

  public saveNotes() {
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('quicknote_dashboard', angular.toJson(this.notes));
    }
  }

  public loadNotes() {
    if (typeof(Storage) !== 'undefined' && localStorage.getItem('quicknote_dashboard')) {
      let dashboard = JSON.parse(localStorage.getItem('quicknote_dashboard'));
      angular.forEach(dashboard, (note) => {
        this.notes.push(new Note(note.title, note.content));
      });
    }
  }


}

require('angular').module('app.notemanager').service('noteManagerService', NoteManagerService);
