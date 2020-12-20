/*
 * Iterating a list of asynchronous tasks sequentially via callbacks
 */

const tasks = [
  // 1. Each async task should accept a callback
  (cb) => setTimeout(cb, 1000),
  (cb) => setTimeout(cb, 1000),
  (cb) => setTimeout(cb, 1000),
];

function runTask (index) {
  // Stop when we've run through to the end of the task list
  if (index === tasks.length) {
    return 'finshed'
  }
  
  const asyncTask = tasks[index]
  // 2. Run the async task
  asyncTask(() => {
    // When this callback is run it means the previous task was complete, so it starts the next task in the list.
    console.log(`Ran task ${index}`)
    runTask(index + 1)
  })
}

// Start the execution flow
runTask(0)
