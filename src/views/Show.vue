<template>
  <div>
    <h1>Show word</h1>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="united kingdom flag"></i>
        English
      </div>
      <input type="text" disabled :value="word.english" />
    </div>
    <br />
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="germany flag"></i>
        German
      </div>
      <input type="text" disabled :value="word.german" />
    </div>
    <br />
    <div>
      <router-link :to="{ name: 'Edit', params: { id: this.$route.params.id } }" class="ui inverted orange button">
        Edit word
      </router-link>
    </div>
  </div>
</template>

<script>

import { ViewVocab } from '../helpers/api'; // Import the ViewVocab function from the api helper

export default {

  name: "Show", // Define the component name
  data() {
    return {
      word: "", // Initialize the word data property as an empty string
    };
  },
  async mounted() {
    // Fetch the vocabulary word using the ViewVocab function with the id from the route parameters
    this.word = await ViewVocab(this.$route.params.id);
    // Log the id from the route parameters to the console
    console.log(this.$route.params.id);
  },
};
</script>
