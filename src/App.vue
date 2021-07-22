<!-- App.vue -->
<!-- 🌀🌀💻================================================= -->

// 🌀🌀💻 HTML 💻🌀🌀
<!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️ -->
<template>
  <!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️ -->

  <!--⚫️ Router-links ⚫️-->
  <div id="nav">
    <router-link to="/">Events</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  
  <!--⚫️ Router-views ⚫️-->
  <router-view/>
  <!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️◾️ -->
</template>
<!-- 🌀🌀💻================================================ -->

// 🌀🌀💻 STYLES 💻🌀🌀
<!-- 🎵🎵🔲🔲◾️◾️◾️◾️◾️◾️◾️ -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h4 {
  font-size: 20px;
}

#nav {
  padding: 30px;
  
  a {
    font-weight: bold;
    color: #2c3e50;
    
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/// - END OF: appContainer
</style>
<!-- 🌀🌀💻================================================ -->

