/// <reference path="../../../../typings/globals/angular/index.d.ts" />

import Note from './note.class';

export default class NoteManagerService {
  static $inject: Array<string> = [];

  private notes: Note[];

  constructor() {
    console.log('service constructor');
    this.notes = [];
  }

  public addNewNote(title: string, content: string) {
    this.notes.push(new Note(title, content));
  }

  public getNotes(): Note[] {
    return this.notes;
  }
}

require('angular').module('app.notemanager').service('noteManagerService', NoteManagerService);
