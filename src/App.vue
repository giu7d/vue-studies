<template>
  <div>
    <Menu />
    <Main />
  </div>
</template>

<script>
import Menu from "./components/Menu/Menu";
import Main from "./pages/Main";

export default {
  name: "App",
  components: {
    Menu,
    Main
  }
};
</script>

<style>
:root {
  font-size: 14px;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  --primary: #ff7eee;
  --secondary: #df49a6;
  --text-primary: #b6b6b6;
  --text-secondary: #ececec;
  --bg-primary: #23232e;
  --bg-secondary: #141418;
  --trasition-speed: 400ms;
}

#app,
body {
  margin: 0;
  padding: 0;
  color: black;
  background-color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
