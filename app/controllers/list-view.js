import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  actions: {
    updateNote(record, e){
      e.preventDefault();       //put ajax call to api/note/: id
      //find note from store/server
      //return a promise which contains the note returned
      this.get('store').findRecord('note', record.id).then(function(note){
        console.log($('#updatedTitle').val());
        //use set to manipulate the attribute inside note model
        //select input val field using jquery
        note.set('noteTag', $('#updatedTag').val());
        note.set('noteTitle', $('#updatedTitle').val());
        note.set('noteContent', $('#updatedContent').val());
        //save changed note model to server api through adapter
        note.save();
        toastr.success('You Have Updated Your Note!');
      });
    },
    deleteNote(record, e){
      e.preventDefault();
      //find the note model to be deleted from store
      //which returns a promise
      this.get('store').findRecord('note', record.id, {backgroundReload: false}).then(function(note){
        //delete the note model
        note.deleteRecord();
        note.destroyRecord();
        //save change to backend persistant storage
        note.save();
        //remove deleted row from frontend view
        $(`[data-post-id="${record.id}"]`).parents('.row').fadeOut();
        toastr.success('You Have Deleted This Note!');
      });
    },
    searchForNotes(event){
      //transition to detail route
      event.preventDefault();
      let keyword = this.get('keyword');
      this.transitionToRoute('search').then(function(search){
        search.controller.set('keyword', keyword);
        //console.log(search.controller.get('model'));
      });
    }
  }
});
