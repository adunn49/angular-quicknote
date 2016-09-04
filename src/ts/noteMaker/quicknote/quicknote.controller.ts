/// <reference path="../../../../typings/globals/angular/index.d.ts" />

export default class QuickNoteController {
  static $inject = ['noteManagerService'];
  private title: string;
  private content: string;

  private editModeEnabled: boolean;

  constructor (public noteManagerService) {
    console.log('quicknote controller');
    this.editModeEnabled = false;
  }

  public isEditModeEnabled() {
    return this.editModeEnabled;
  }

  public setEditMode(value: boolean) {
    this.editModeEnabled = value;
  }

  public validateNote() {
    // If the content is not blank then we want to create a new note.
    if (this.content !== '') {
      this.noteManagerService.addNewNote(this.title, this.content);
      this.editModeEnabled = false;
    }
  }
}

require('angular').module('app.quicknote')
  .controller('QuickNoteController', QuickNoteController);
