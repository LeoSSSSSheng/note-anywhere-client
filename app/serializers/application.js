import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  // attrs: {
  //   noteTitle: 'note',
  // },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    //console.log(payload[0].note.noteTag);
    //root key notes
    payload = {
      notes: payload,
    };
    for(var i =  0; i < payload.notes.length; i++){
      payload.notes[i].noteTag = payload.notes[i].note.noteTag;
      payload.notes[i].noteTitle = payload.notes[i].note.noteTitle;
      payload.notes[i].noteContent = payload.notes[i].note.noteContent;
      payload.notes[i].createdAt = payload.notes[i].note.createdAt;
      payload.notes[i].updatedAt = payload.notes[i].note.updatedAt;
      payload.notes[i].location = payload.notes[i].note.location;
      payload.notes[i].picture = payload.notes[i].note.picture;
      payload.notes[i].id = payload.notes[i].id;


      delete payload.notes[i].note;
    }
    let newPayload = {};
    newPayload[primaryModelClass.modelName] = payload.notes;

    console.log(newPayload);

    //console.log(payload['notes'][0].note);
    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }
});
