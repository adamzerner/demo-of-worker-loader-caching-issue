To get started:
- `npm install`
- `npm run dev`

I was trying to reproduce [this](https://stackoverflow.com/questions/52265855/service-worker-wont-install-when-i-try-to-cache-xxx-worker-js) issue, but was unable to reproduce it.

Note that in order to get the dev server to return `service-worker.js` in response to `GET service-worker.js`, I had to add the following to `/node_modules/webpack-dev-server/lib/Server.js`:

```
app.get('/service-worker.js', function (req, res) {
  res.sendFile(path.join(__dirname, '../../../', 'service-worker.js'));
});
```

Be careful when running `npm install` to make sure that it doesn't get overwritten (or if it does, to add that code back in).
