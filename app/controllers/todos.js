import Ember from 'ember';

export default Ember.Controller.extend({
  taskName: "",
  actions: {
    addTask: function() {
      // Пишем задачу в localStorage
      localStorage.setItem(this.get('taskName'), 0);
      this.set('taskName',"");
      location.reload();
    }
  }
});

