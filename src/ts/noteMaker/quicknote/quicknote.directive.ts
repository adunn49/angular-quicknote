/// <reference path="../../../../typings/globals/angular/index.d.ts" />

import QuickNoteController from './quicknote.controller';

export default class QuickNote implements ng.IDirective {

  static $inject: Array<string> = [];

  static instance(): ng.IDirective {
    console.log('new quicknote');
    return new QuickNote();
  }

  constructor() {
    console.log('directive constructor');
  }

  bindToController: boolean = true;
  controller = QuickNoteController;
  controllerAs: string = 'qnCtrl';
  restrict: string = 'E';
  templateUrl: string = '../html/quicknote.html';
}

require('angular').module('app.quicknote')
  .directive('adQuickNote', QuickNote.instance);
