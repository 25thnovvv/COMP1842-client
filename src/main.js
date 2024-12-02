import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Import Semantic UI CSS framework for styling the web UI
import 'semantic-ui-css/semantic.css'

// Import and configure the Vue Flash Message library
import VueFlashMessage from 'vue-flash-message'
// Import CSS for the flash message library
import 'vue-flash-message/dist/vue-flash-message.min.css'

// Enable the Vue Flash Message library and configure default options
Vue.use(VueFlashMessage, {
  messageOptions: {
    // Set the default timeout for flash messages to 5 seconds
    timeout: 5000
  }
})

// Disable Vue's production tip message in the console
Vue.config.productionTip = false

// Create a new Vue instance
new Vue({
  // Inject the router into the Vue instance
  router,
  // Render the App component as the root component
  render: function (h) { return h(App) },
  // Mount the Vue instance to the DOM element with the id 'app'
}).$mount('#app')
