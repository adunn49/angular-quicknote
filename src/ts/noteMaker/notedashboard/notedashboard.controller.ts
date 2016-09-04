/// <reference path="../../../../typings/globals/angular/index.d.ts" />

import NoteManagerService from '../notemanager/notemanager.service';

export default class NoteDashboardController {
  static $inject = ['noteManagerService'];

  constructor (public noteManagerService) {
  }

  public getNotes() {
    return this.noteManagerService.getNotes();
  }

}

require('angular').module('app.notedashboard')
  .controller('NoteDashboardController', NoteDashboardController);
