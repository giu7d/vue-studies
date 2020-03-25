<template>
  <div class="container">
    <div class="header">
      <Icon icon="various/rocket" />
      <h1>Feed</h1>
    </div>
    <Articles :articles="articles" />
  </div>
</template>

<script>
import Articles from "components/Articles";
import Icon from "components/Icon";
import { listFeed } from "services/mock.service";

export default {
  name: "Feed",
  components: { Articles, Icon },
  data() {
    return {
      articles: []
    };
  },
  mounted() {
    listFeed()
      .then(data => (this.articles = data))
      .catch(err => console.error(err));
  }
};
</script>

<style>
.container {
  margin-left: 5rem;
  padding: 2rem;
}

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
}
@media only screen and (max-width: 600px) {
  .container {
    margin: auto;
    padding: 2rem;
  }
}
</style>