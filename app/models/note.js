import DS from 'ember-data';

export default DS.Model.extend({
  noteTag: DS.attr('string'),
  noteTitle: DS.attr('string'),
  noteContent: DS.attr('string'),
  createdAt: DS.attr('date', {
    defaultValue(){ return new Date();}
  }),
  updatedAt: DS.attr('date'),
  noteLat: DS.attr('string'),
  noteLog: DS.attr('string'),
  picture: DS.attr('string'),
  notes: DS.hasMany('note', { defaultValue: true })
});
