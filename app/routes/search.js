import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    //get the passed keyword from list-View route
    return this.store.findAll('note');
  }
});
