import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: 'none'
});

Router.map(function(){
  this.route('todos', { path: '/' });
  this.route('favorites');
  this.route('done' );
});

export default Router;
