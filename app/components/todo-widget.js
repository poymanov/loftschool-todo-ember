import Ember from 'ember';

export default Ember.Component.extend({
actions: {
    changeTask: function(task,taskValue) {
      localStorage.setItem(task, +!taskValue);
      console.log("Состояние задачи изменено");
      location.reload();
    }
}
});
