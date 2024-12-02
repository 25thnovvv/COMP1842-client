import Vue from 'vue'
import Router from 'vue-router'
import Words from './views/Words.vue'
import New from './views/New.vue'
import Show from './views/Show.vue'
import Edit from './views/Edit.vue'
import About from './views/About.vue'
import Home from './views/Home.vue'
import Test from './views/Test.vue'

// Register the Router plugin with Vue
Vue.use(Router)

// Define and configure the router
const router = new Router({
   // Use "history" mode to remove the hash (#) from URLs
   mode: 'history',
   // Define the application routes
   routes: [
      {
         // Route for the home page
         path: '/',
         // Route name
         name: 'Home',
         // Component to render for this route
         component: Home
      },
      {
         // Route for the words list
         path: '/words',
         name: 'Words',
         component: Words
      },
      {
         // Route for creating a new word
         path: '/words/new',
         name: 'New',
         component: New
      },
      {
         // Route for viewing details of a specific word
         // ":id" is a dynamic segment representing the word ID
         path: '/words/show/:id',
         name: 'Show',
         component: Show
      },
      {
         // Route for editing a specific word
         // ":id" is a dynamic segment representing the word ID
         path: '/words/edit/:id',
         name: 'Edit',
         component: Edit
      },
      {
         // Route for the "About" page
         path: '/about',
         name: 'About',
         component: About
      },
      {
         // Route for testing purposes
         path: '/test',
         name: 'test',
         component: Test
      }
   ]
})

// Export the router instance for use in the main application
export default router
