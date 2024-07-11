let timers = {};

self.onmessage = function(e) {
  const { action, taskId, time } = e.data;

  switch (action) {
    case 'start':
      timers[taskId] = setInterval(() => {
        self.postMessage({ taskId, time: time + 1 });
      }, 1000);
      break;
    case 'stop':
      clearInterval(timers[taskId]);
      delete timers[taskId];
      break;
    case 'reset':
      clearInterval(timers[taskId]);
      delete timers[taskId];
      self.postMessage({ taskId, time: 0 });
      break;
  }
};