<template>
   <div>
      <h1>New Word</h1>
      <form action="" @submit.prevent="onSubmit">
         <div class="ui labeled input fluid">
            <div class="ui label"><i class="united kingdom flag"></i> English</div>
            <input type="text" required v-model="word.english" />
         </div>
         <br />
         <div class="ui labeled input fluid">
            <div class="ui label"><i class="germany flag"></i> German</div>
            <input type="text" required v-model="word.german" />
         </div>
         <br />
         <button class="ui inverted green button">Submit</button>
      </form>
   </div>
</template>

<script>
import { AddVocab } from "../helpers/api"; // Import the AddVocab function from the api helper

export default {
   name: "New", // Define the component name
   data() {
      return {
         word: {}, // Initialize the word object
      };
   },
   methods: {
      onSubmit: async function () {
         //1. Add new word to database using axios
         await AddVocab(this.word);
         //2. Display success message using vue-flash
         this.flash("Add new word succeed !");
         //3. Redirect to word list using $router
         this.$router.push("/words");
      },
   },
};
</script>