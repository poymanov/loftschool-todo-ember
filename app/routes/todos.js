import Ember from 'ember';
import TODOS from '../todos_data';

export default Ember.Route.extend({
  model: function() {
    // Получаем данные из localStorage
    
    return TODOS;
  }
});
