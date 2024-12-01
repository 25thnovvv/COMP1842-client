<template>
  <div>
    <div class="ui inverted grey segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary pointing menu compact">
          <router-link to="/words" class="item link-white">
            <i class="list icon"></i>Words
          </router-link>
          <router-link to="/words/new" class="item link-white">
            <i class="plus icon"></i>New
          </router-link>
          <router-link to="/test" class="item link-white">
            <i class="check icon"></i>Test
          </router-link>
          <router-link to="/about" class="item link-white">
            <i class="question circle outline icon"></i>About
          </router-link>
        </div>
      </div>
    </div>

    <div class="ui container">
      <div class="ui grid">
        <div class="row">
          <div class="twelve wide column">
            <router-view />
          </div>
          <div class="four wide column">
            <flash-message></flash-message>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: beige; /* Applies beige background to the whole page */
  margin: 0; /* Removes default body margin for consistency */
  font-family: 'Arial', sans-serif; /* Optional: Sets a global font style */
}
/* Custom CSS for white links */
.link-white {
  color: white !important; /* Ensures the text color is white */
}

.link-white:hover {
  color: black !important; /* Optional: Light gray on hover for better UX */
}
</style>
