import Ember from 'ember';


export default Ember.Controller.extend({
  createdAt: new Date(),
  actions:{
    createNote(e){
      e.preventDefault();
      //first create mode in store, model name and content
      let note = this.store.createRecord('note', {
        noteTitle: this.get('noteTitle'),
        noteTag: this.get('noteTag'),
        noteContent: this.get('noteContent'),
      });
      note.save(); //make post ajax call to api notes
      toastr.success('New Note Created!');
    }
  }
});
