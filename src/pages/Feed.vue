<template>
  <div>
    <div class="header">
      <Icon icon="various/rocket" />
      <h2>Feed</h2>
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
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
}
</style>