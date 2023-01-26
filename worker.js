let running = true;
let refreshTime = 200;

// Listen for messages from the main thread
self.onmessage = function(event) {
  if (event.data === 'stop') {
    running = false;
    self.close();
  } else if (event.data === 'start') {
    running = true;
    fn();
  }
};

const fn = async () => {
  if (running) {
    let executedAt = Date.now();
    setTimeout(async () => {
      executedAt = Date.now();
      self.postMessage({ type: 'iteration', executedAt });
      fn();
    }, refreshTime - (executedAt % refreshTime));
  }
};
