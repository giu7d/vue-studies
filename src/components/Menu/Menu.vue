<template>
  <nav>
    <ul>
      <Item description="Feed" icon="various/rocket" link="/" />
      <!-- Channels -->
      <!-- Begin -->
      <Item
        v-for="channel in channels"
        :key="channel.id"
        :link="'/channel/'+channel.id"
        :icon="channel.icon"
        :description="`#${channel.title}`"
      />
      <!-- End -->
      <Item description="New Article" icon="basic/plus" link="#" />
    </ul>
  </nav>
</template>

<script>
import Item from "components/Menu/Item";

export default {
  name: "Menu",
  components: {
    Item
  },
  props: {
    channels: Array
  }
};
</script>

<style>
nav {
  top: 0;
  position: fixed;
  width: 5rem;
  height: 100vh;
  z-index: 9;

  background: var(--bg-primary);
  transition: width 200ms ease;
}

nav:hover {
  width: 16rem;
}

nav:hover .description {
  display: block;
}

ul {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100%;

  list-style: none;
  align-items: center;
}

.item:last-child {
  margin-top: auto;
}

@media only screen and (max-width: 600px) {
  nav {
    top: auto;
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  nav:hover {
    width: 100vw;
  }

  nav:hover .description {
    display: none;
  }

  ul {
    flex-direction: row;
  }
}
</style>
