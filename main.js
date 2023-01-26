const worker = new Worker("worker.js");

// Start the worker
function startWorker() {
  worker.postMessage("start");
}

// Stop the worker
function stopWorker() {
  worker.postMessage("stop");
}

// Listen for messages sent by the worker
worker.onmessage = function(event) {
  console.log(event.data);
};

// Start the worker
startWorker();