module.exports = {
  async websocketFn(ctx, next) {
    ctx.websocket.send('Hello World');
    ctx.websocket.on('message', function (message) {
    });
  }
} 