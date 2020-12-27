/**
 * Runs each function in <collection> sequentially using callback execution flow.
 * 
 * @param {Array} collection A list of functions to run
 * @param {function({ taskIndex: number })} callback A function to run after each function in <collection>
 * @param {function} finalCallback The function to run after the last function in <collection> has run
 */
function runSequential(collection, callback, finalCallback) {

  let index = 0;

  function runNextTask(index) {
    if (index === collection.length) {
      return finalCallback();
    }

    const task = collection[index]
    
    task(() => {
      callback({taskIndex: index})
      runNextTask(++index)
    })
  }

  runNextTask(index)
}

module.exports = {
  runSequential
}