import Ember from 'ember';
import TODOS from '../todos_data_undone';

export default Ember.Route.extend({
  model: function() {
    return TODOS;
  }
});