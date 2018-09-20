// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js').then(function () {
    console.log('Service worker registration successful.');
  }).catch(function(error) {
    console.log('Service worker registration failed.');
    console.log('Error: ', error);
  });
}
