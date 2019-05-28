module.exports = {
  async websocketFn(ctx, next) {
    ctx.websocket.send('Hello World');
    ctx.websocket.on('message', function (message) {
      // do something with the message from client
      console.log('4324532');
    });
  }
} 