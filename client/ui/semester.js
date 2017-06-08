import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './semester.html';

Template.module.events({
    'click .module'(event) {
        const target = event.target;
        $(target).simulate('drag');
    },
});

Template.sem_template.onRendered(function() {
    $('.module').draggable();
});