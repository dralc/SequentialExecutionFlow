const runSequential = require('./runSequential.js')

const tasks = [
  // 1. Each async task should accept a callback
  (cb) => setTimeout(cb, 1000),
  (cb) => setTimeout(cb, 1000),
  (cb) => setTimeout(cb, 1000),
];

runSequential(
  tasks,
  data => {
    console.log(`Ran task ${data.taskIndex}`)
  },
  () => {
    console.log(`All done :)`)
  }
)