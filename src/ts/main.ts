/// <reference path="../../typings/globals/angular/index.d.ts" />
/// <reference path="../../typings/globals/require/index.d.ts" />

require('angular');
require('angular-aria');
require('angular-animate');
require('angular-material');


require('./noteMaker/notemanager');
require('./noteMaker/quicknote');
require('./noteMaker/notedashboard');

require('angular').module('app', ['ngMaterial', 'app.notemanager', 'app.quicknote', 'app.notedashboard']);
