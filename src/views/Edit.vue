<template>
   <div>
      <h1>Edit Word</h1>
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
import { ViewVocab, EditVocab } from "../helpers/api"; // Importing API helper functions

export default {
   name: "Edit", // Component name
   data() {
      return {
         word: {}, // Data property to hold the word object
      };
   },
   async mounted() {
      // Lifecycle hook that runs when the component is mounted
      this.word = await ViewVocab(this.$route.params.id); // Fetch the word data based on the route parameter id
   },
   methods: {
      onSubmit: async function () {
         // Method to handle form submission
         await EditVocab(this.$route.params.id, this.word); // 1. Update the word in the database using the API
         this.flash("Edit word succeed !"); // 2. Display success message using vue-flash
         this.$router.push("/words"); // 3. Redirect to the word list page using the router
      },
   },
};
</script>