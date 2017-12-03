import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  map: '',

  didInsertElement() {
    console.log(this.element);
    var map = new google.maps.Map(this.element, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
    this.set('map', map);
  },

  // actions:{
  //   showMap(){
  //     var container= this.$('#map');
  //     var options = {
  //       center: this.get('googleMap').center(0,0),
  //       zoom:15
  //     };
  //     this.get('googleMap').findMap(container, options);
  //   }
});
