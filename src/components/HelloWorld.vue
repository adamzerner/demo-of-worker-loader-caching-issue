<template>
  <div>
    <p>Hello world</p>
    <button v-on:click="testWorker()">Test worker</button>
  </div>
</template>

<script>
import Worker from 'worker-loader!../test.worker.js';

export default {
  name: 'HelloWorld',
  methods: {
    testWorker: function () {
      let worker = new Worker();

      worker.postMessage({
        message: 'test',
      });

      worker.onmessage = function (e) {
        if (e.data.message === 'test') {
          alert('Received test message from worker.');
        }
      };
    },
  },
};
</script>

<style scoped>
</style>
