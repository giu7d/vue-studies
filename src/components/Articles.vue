<template>
  <div>
    <Card
      v-for="article in articles"
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

export default {
  name: "Articles",
  components: { Card },
  props: {
    articles: Array
  }
};
</script>

<style>
.warning {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.warning h2 {
  text-transform: uppercase;
  font-size: 3rem;
  margin: 0;
}

.warning p {
  font-size: 1.2rem;
}

.warning li {
  margin: 1rem 0;
}
</style>
