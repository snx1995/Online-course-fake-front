<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<style>
@import url("../static/common/common-fonts.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  min-width: 1200px;
}
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: rgb(252, 252, 252);
}
body {
  padding-top: 120px;
}
.show-modal {
  overflow: hidden;
}
</style>
