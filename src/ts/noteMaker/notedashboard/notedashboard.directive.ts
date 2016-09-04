/// <reference path="../../../../typings/globals/angular/index.d.ts" />

import NoteDashboardController from './notedashboard.controller';

export default class NoteDashboard implements ng.IDirective {

  static $inject: Array<string> = [''];

  static instance(): ng.IDirective {
    return new NoteDashboard();
  }

  bindToController: boolean = true;
  controller = NoteDashboardController;
  controllerAs: string = 'ndCtrl';
  restrict: string = 'E';
  templateUrl: string = '../html/notedashboard.html';
}

require('angular').module('app.notedashboard')
  .directive('adNoteDashboard', NoteDashboard.instance);
