<!-- Had to delete a lot of comments from my code, seemed to interfere -->
<!-- with the components when placed in certain locations -->
<!-- also had a difficult to trace error, turned out to be closing bracket of h1 below -->
<template>
  <div id="app">
    <h1>Would you rather...</h1>
    <would-you-rather
      v-bind:question="wyrQuestion" 
      v-bind:answer1="wyrAnswer1"
      v-bind:answer2="wyrAnswer2"
      v-on:answer-changed="answerChanged">
      <!-- when answer-changed event is received from child component, call the method answerChanged-->
    </would-you-rather>
        <!-- adds WouldYouRather component -->
        <!-- v-bind from parent data to child props -->
    <p>{{ userSelectionMessage }}</p>
  </div>
</template>

<!-- v-bind: [prop in wyr.vue] = ["name in App.vue"]-->

<script>
import WouldYouRather from './components/WouldYouRather.vue'
export default {
  name: 'App',  
  components: {WouldYouRather},
  data() {
    return {
      wyrQuestion: 'Would you rather be able to see things that are very far away, like binoculars, or be able to see things very close up, like a microscope?',
      wyrAnswer1: 'binocular eyes!',
      wyrAnswer2: 'microscope eyes!',
      userSelectionMessage:''
      //https://conversationstartersworld/would-you-rather-questions/would-you-rather-questions-for-kids #21
    }
  }, // end data
  methods: {
    answerChanged(choice) {
     this.userSelectionMessage = `Thanks!  You chose ${choice}.`
    }
  } // end methods
}  // end export
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: darkgreen;
  margin-top: 60px;
  border-top:1px fuchsia solid;
}
</style>
