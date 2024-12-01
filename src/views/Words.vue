<template>
  <div>
    <h1>Words list</h1>
    <table class="ui celled table beige-table">
      <thead>
        <tr>
          <th>English</th>
          <th>German</th>
          <th colspan="2">Menu</th>
          <th>
            <a class="ui inverted orange button" @click.prevent="onDeleteAll()">
              Delete All </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(word, i) in words" :key="i">
          <td>{{ word.english }}</td>
          <td>{{ word.german }}</td>
          <td>
            <router-link class="ui inverted green button" :to="{ name: 'Show', params: { id: word._id } }">
              Show
            </router-link>
          </td>
          <td>
            <router-link class="ui inverted primary button" :to="{ name: 'Edit', params: { id: word._id } }">
              Edit
            </router-link>
          </td>
          <td>
            <a class="ui inverted red button" @click.prevent="onDelete(word._id)">
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ViewAllVocabs, DeleteVocab, DeleteAllVocabs } from '../helpers/api.js'

export default {
  name: "Words",
  data() {
    return {
      words: [],
    };
  },
  async mounted() {
    this.words = await ViewAllVocabs();
  },
  methods: {
    async onDelete(id) {
      //1. display confirm message before deletion
      const deleteConfirm = window.confirm(
        "Are you sure to delete this word ?"
      );
      if (deleteConfirm) {
        //2. delete word from database
        await DeleteVocab(id);
        //3. refresh the word list (remove deleted words)
        const updatedWords = this.words.filter((word) => word._id !== id);
        this.words = updatedWords;
        //4. display flash message after deletion
        this.flash("Delete word succeed !");
      }
    },
    async onDeleteAll() {
      //1. display confirm message before deletion
      const deleteConfirm = window.confirm(
        "Are you sure to delete all words ?"
      );
      if (deleteConfirm) {
        //2. delete word from database
        await DeleteAllVocabs();
        //3. refresh word list
        this.words = [];
        //4. display flash message after deletion
        this.flash("Delete all word succeed !");
      }
    },
  },
}
</script>

<style>
/* Set the background color of the table to beige */
.beige-table {
  background-color: beige !important; /* Beige background for the table */
  border-radius: 8px; /* Optional: Adds rounded corners for aesthetics */
  padding: 10px; /* Optional: Adds inner spacing */
}

.beige-table th,
.beige-table td {
  background-color: beige; /* Lighter beige for individual cells */
  color: black;
}
</style>