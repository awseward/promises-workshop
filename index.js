const superagent = require('superagent');

const endpoints = {
  stories:   'http://liveproxy-rails-example.herokuapp.com/api/v1/stories',
  sentences: 'http://liveproxy-rails-example.herokuapp.com/api/v1/sentences',
}

function _getStoriesPromise() {
  return new Promise((resolve, reject) => {
    superagent.get(endpoints.stories).end((err, resp) => {
      if (err) {
        reject(err);
      } else {
        resolve(resp.body.stories);
      }
    });
  });
}

function _getSentencesPromise(storyId) {
  return new Promise((resolve, reject) => {
    superagent.get(endpoints.sentences).query({ story_id: storyId }).end((err, resp) => {
      if (err) {
        reject(err);
      } else {
        resolve(resp.body.sentences);
      }
    });
  });
}

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

// Print stories response using callbacks
function callbackStories(cLog, cErr) {
  superagent.get(endpoints.stories).end((err, resp) => {
    if (err) {
      cErr(err);
    }

    cLog(resp.body.stories);
  });
}

// Print the first story's sentences using callbacks
function callbackFirstStorySentences(cLog, cErr) {
  superagent.get(endpoints.stories).end((err, resp) => {
    if (err) {
      cErr(err);
    }
    const stories = resp.body.stories;

    superagent.get(endpoints.sentences).query({ story_id: stories[0].id }).end((err, resp) => {
      if (err) {
        cErr(err);
      }

      cLog(resp.body.sentences);
    });
  });
}

// Print stories response using promsies
function promiseStories(cLog, cErr) {
  _getStoriesPromise()
    .then(res => cLog(res))
    .catch(err => cErr(err));
}

// Print the first story's sentences using promises (naive implementation)
function promiseFirstStorySentences(cLog, cErr) {
  _getStoriesPromise()
    .then(stories => {
      const firstStory = stories[0];
      _getSentencesPromise(firstStory.id)
        .then(sentences => cLog(sentences))
        .catch(err => cErr(err));
    })
    .catch(err => cErr(err));
}

// Print the first story's sentences using promises (flattened implementation)
function arePromisesReallyBetterThanCallbacks(cLog, cErr) {
  _getStoriesPromise()
    .then(stories => {
      const firstStory = stories[0];
      return _getSentencesPromise(firstStory.id);
    })
    .then(sentences => cLog(sentences))
    .catch(err => cErr(err));
}

// Print all the stories' sentences
function promisesAllStoriesSentences(cLog, cErr) {
  _getStoriesPromise()
    .then(stories => {
      const sentencesPromises = stories.map(story => {
        return _getSentencesPromise(story.id);
      });

      return Promise.all(sentencesPromises);
    })
    .then(sentences => cLog(sentences))
    .catch(err => cErr(err));
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

// FIXME: This doesn't really work in practice because of the async nature of
// these exercises
//
// exercises.forEach((fn, idx) => {
//   console.log(`*** Exercise ${idx} ***`);
//   fn();
//   console.log();
// });
