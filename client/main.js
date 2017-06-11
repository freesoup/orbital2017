import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { HTTP } from 'meteor/http';
import { Blaze } from 'meteor/blaze';

import './main.html';
import './ui/semester.js';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.platform.events({
   'click #add-semester-logo'(event) {
       let myContainer = document.getElementById('semester-container'); 
       let addSem = document.getElementById('add-semester');
       let renderedTemplate = Blaze.render(Template.sem_template, myContainer, addSem);
   },
});