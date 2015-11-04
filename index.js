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

// Print stories response using callbacks
function callbackStories() {
  superagent.get(endpoints.stories).end((err, resp) => {
    if (err) {
      console.error(err);
    }

    console.log(resp.body.stories);
  });
}

// Print the first story's sentences using callbacks
function callbackFirstStorySentences() {
  superagent.get(endpoints.stories).end((err, resp) => {
    if (err) {
      console.error(err);
    }
    const stories = resp.body.stories;

    superagent.get(endpoints.sentences).query({ story_id: stories[0].id }).end((err, resp) => {
      if (err) {
        console.error(err);
      }

      console.log(resp.body.sentences);
    });
  });
}

// Print stories response using promsies
function promiseStories() {
  _getStoriesPromise()
    .then(res => console.log(res))
    .catch(err => console.error(err));
}

// Print the first story's sentences using promises (naive implementation)
function promiseFirstStorySentences() {
  _getStoriesPromise()
    .then(stories => {
      const firstStory = stories[0];
      _getSentencesPromise(firstStory.id)
        .then(sentences => {
          console.log(sentences);
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
}

// Print the first story's sentences using promises (flattened implementation)
function arePromisesReallyBetterThanCallbacks() {
  _getStoriesPromise()
    .then(stories => {
      const firstStory = stories[0];
      return _getSentencesPromise(firstStory.id);
    })
    .then(sentences => console.log(sentences))
    .catch(err => console.error(err));
}

// Print all the stories' sentences
function promisesAllStoriesSentences() {
  _getStoriesPromise()
    .then(stories => {
      const sentencesPromises = stories.map(story => {
        return _getSentencesPromise(story.id);
      });

      return Promise.all(sentencesPromises);
    })
    .then(sentences => console.log(sentences))
    .catch(err => console.error(err));
}

const exercises = [
  // callbackStories,
  // callbackFirstStorySentences,
  // promiseStories,
  // promiseFirstStorySentences,
  // arePromisesReallyBetterThanCallbacks,
  promisesAllStoriesSentences,
];

exercises.forEach(fn => fn());

// FIXME: This doesn't really work in practice because of the async nature of
// these exercises
//
// exercises.forEach((fn, idx) => {
//   console.log(`*** Exercise ${idx} ***`);
//   fn();
//   console.log();
// });
