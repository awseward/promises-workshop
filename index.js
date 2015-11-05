const superagent = require('superagent');

const endpoints = {
  stories:   'http://liveproxy-rails-example.herokuapp.com/api/v1/stories',
  sentences: 'http://liveproxy-rails-example.herokuapp.com/api/v1/sentences',
}

/*
 * Notes
 *
 * + Each exercise function takes two functions as arguments (cLog and cErr)
 *   cLog should be used in place of console.log
 *   cErr should be used in place of console.error
 */

/*
 * Helpers
 */
function __print(fn, exerciseNum, content) {
  fn(`*** Exercise ${exerciseNum} ***`);
  fn(content);
  console.log();
}

function _log(exerciseNum, content) {
  __print(console.log, exerciseNum, content);
}

function _error(exerciseNum, content) {
  __print(console.error, exerciseNum, content);
}

/*
 * To implement
 */

function _getStoriesPromise() {
  // TODO: Implement
}

function _getSentencesPromise(storyId) {
  // TODO: Implement
}

// Print stories response using callbacks
function callbackStories(cLog, cErr) {
  // TODO: Implement
}

// Print the first story's sentences using callbacks
function callbackFirstStorySentences(cLog, cErr) {
  // TODO: Implement
}

// Print stories response using promsies
function promiseStories(cLog, cErr) {
  // TODO: Implement
}

// Print the first story's sentences using promises (naive implementation)
function promiseFirstStorySentences(cLog, cErr) {
  // TODO: Implement
}

// Print the first story's sentences using promises (flattened implementation)
function arePromisesReallyBetterThanCallbacks(cLog, cErr) {
  // TODO: Implement
}

// Print all the stories' sentences
function promisesAllStoriesSentences(cLog, cErr) {
  // TODO: Implement
}

const exercises = [
  callbackStories,
  callbackFirstStorySentences,
  promiseStories,
  promiseFirstStorySentences,
  arePromisesReallyBetterThanCallbacks,
  promisesAllStoriesSentences,
];

exercises.forEach((exercise, idx) => {
  const cLog = content => _log(idx, content);
  const cErr = content => _error(idx, content);

  exercise(cLog, cErr);
});
