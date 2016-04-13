import Ember from 'ember';

export default Ember.Controller.extend({
  taskName: "",
  actions: {
    addTask: function() {
      // Пишем задачу в localStorage
      localStorage.setItem(this.get('taskName'), 0);
      this.set('taskName',"");
      location.reload();
    },
    changeTask: function(task,taskValue) {
      localStorage.setItem(task, +!taskValue);
      console.log("Состояние задачи изменено");
      location.reload();
    }
  }
});

