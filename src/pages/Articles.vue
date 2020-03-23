<template>
  <div class="container">
    <Card
      v-for="article in feed"
      :key="article.id"
      :title="article.title"
      :channels="article.channels.map(({title}) => title)"
      :authors="article.authors"
      :abstract="article.abstract"
      :isLiked="article.isLiked"
    />
  </div>
</template>

<script>
import Card from "components/Card";
import { listFeed } from "services/mock.service";

export default {
  name: "Articles",
  components: { Card },
  data() {
    return {
      feed: []
    };
  },
  mounted() {
    listFeed()
      .then(data => (this.feed = data))
      .catch(err => console.error(err));
  }
};
</script>

<style>
.container {
  margin-left: 5rem;
  padding: 2rem;
}
</style>
