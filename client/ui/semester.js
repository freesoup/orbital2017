import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './semester.html';

Template.sem_template.onRendered(function() {
    $('.module').draggable();
    $('module-container').droppable();
    $('.module-container').sortable();
});