import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  model(){

    $(".loading").addClass("loader");
    let notes = this.store.findAll('note');
    $(".loading").removeClass("loader");

    return notes;
  }
});
