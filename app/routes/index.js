import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('article', {
      orderBy: 'timestamp',
      limitToLast: 6
      });
  }
});
