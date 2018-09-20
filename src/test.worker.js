self.addEventListener('message', function (e) {
  if (e.data.message === 'test') {
    self.postMessage({
      message: 'test',
    });
  }
});
