import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  //using computed property to select search item
  relatedNotes: Ember.computed('model', 'keyword', function(){
    let notes = this.get('model');
    let keyword = this.get('keyword');
    console.log(keyword);

    let relatedNotes = {"note": []};
    console.log(this.get('model'));
    notes.filter(function(note){
        if(note.get("noteTitle") === keyword){
          relatedNotes.note.push({
            "noteTitle": note.get("noteTitle"),
            "noteTag": note.get("noteTag"),
            "noteContent": note.get("noteContent"),
            "createdAt": note.get("createdAt")
          });
        }
    });
    console.log(relatedNotes);
    //search for notes when match the keyword add the note to "relatedNotes"
    return relatedNotes;
  })

});
