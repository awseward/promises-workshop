/*
 * Constants
 */
const endpoints = {
  stories:   'http://liveproxy-rails-example.herokuapp.com/api/v1/stories',
  sentences: 'http://liveproxy-rails-example.herokuapp.com/api/v1/sentences',
}

function _unfinishedExercise() {
  console.log(`This exercise has not been completed yet.`);
}

// Print stories response using callbacks
function callbackStories() {
  _unfinishedExercise();
  // TODO
}

// Print the first story's sentences using callbacks
function callbackFirstStorySentences() {
  _unfinishedExercise();
  // TODO
}

// Print stories response using promsies
function promiseStories() {
  _unfinishedExercise();
  // TODO
}

// Print the first story's sentences using promises
function promiseFirstStorySentences() {
  _unfinishedExercise();
  // TODO
}

// Critically consider your implementation to the last exercise
function arePromisesReallyBetterThanCallbacks() {
  _unfinishedExercise();
  // TODO
}

// Print all the stories' sentences
function promisesAllStoriesSentences() {
  _unfinishedExercise();
  // TODO
}

const exercises = [
  callbackStories,
  callbackFirstStorySentences,
  promiseStories,
  promiseFirstStorySentences,
  arePromisesReallyBetterThanCallbacks,
  promisesAllStoriesSentences,
];

exercises.forEach((fn, idx) => {
  console.log(`*** Exercise ${idx} ***`);
  fn();
  console.log();
});

// $(document).ready(function(){
//   /************************
//    * Callbacks
//    *************************/

//   // Exercise 1 log the stories returned from the stories endpoint:
//   superagent.get(storiesEndpoint).end(function(err, res){
//     if (err) { console.log(err); }
//     var stories = res.body.stories;
//     console.log('A list of stories', stories);
//   });

//   // Exercise 2
//   // grab the stories from the first endpoint
//   // then get the first story's sentences using the sentences endpoint + story_id
//   // eg: http://liveproxy-rails-example.herokuapp.com/api/v1/sentences?story_id=1

//   superagent.get(storiesEndpoint).end(function(err, res){
//     if (err) { console.log(err); }
//     var stories = res.body.stories;
//     var firstStory = stories[0];
//     console.log('First story is', firstStory);
//     superagent.get(sentencesEndpoint).query({story_id: firstStory.id}).end(function(err, res) {
//       console.log('First story\'s sentences are', res.body);
//     })
//   });


//   /*************************
//    * Promises
//    *************************/

//   // Exercise 1
//   // Make a promise that loads stories
//   // Log those stories

//   var loadStoriesES6 = new Promise((resolve,reject) => {

//   });


//   loadStoriesES6
//     .then()
//     .catch();

//   // Exercise 2
//   // grab the stories from the first endpoint
//   // then get the first story's sentences using this endpoint:
//   // url: http://liveproxy-rails-example.herokuapp.com/api/v1/sentences?story_id=<story_id>

//   function loadSentencesES6(id) {
//     return new Promise((resolve, reject) => {

//     });
//   };

//   loadStoriesES6
//     .then()
//     .catch();

//   // Exercise 2.5
//   // Does your promise implementation look like callback hell?
//   // Flatten it out.


//   // Exercise 3
//   // grab the stories from the first endpoint
//   // then get the sentences for every story
//   // then log the story name and the sentences associated to that story
//   // Use the functions you made in Exercise 2
//   // Use Promise.all([p1, p2, p3])
//   // url: http://liveproxy-rails-example.herokuapp.com/api/v1/sentences?story_id=<story_id>

//   loadStoriesES6
//     .then(/* Use the concept from 2.5 */)
//     .catch();

// });
