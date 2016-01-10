'use strict';

var $ = window.$ = require('substance/util/jquery');
var Component = require('substance/ui/Component');
var Notepad = require('./Notepad');
var HubClient = require('substance-hub/HubClient');

var hub = new HubClient({
  host: 'ws://localhost:5000'
});

hub.on('connected', function() {
  console.log('YAY connected');
});

// var NoteImporter = require('../converter/NoteImporter');
// var importer = new NoteImporter();

var exampleNote = require('../note/exampleNote');

$(function() {
  // var htmlContent = $('#editor_container').html();
  $('#editor_container').empty();
  var doc = exampleNote; // importer.importDocument(htmlContent);
  
  // For debugging in the console
  window.doc = doc;
  Component.mount(Notepad, {
    doc: doc
  }, $('#editor_container'));
});