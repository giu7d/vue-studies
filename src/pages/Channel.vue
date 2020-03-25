<template>
  <div v-if="channel !== null">
    <div class="header">
      <Icon :icon="channel.icon" />
      <h2>{{channel.title}}</h2>
    </div>
    <Articles :articles="articles" />
  </div>
</template>

<script>
import Icon from "components/Icon";
import Articles from "components/Articles";
import { openChannel, listArticleByChannel } from "services/mock.service";

export default {
  name: "Channel",
  components: { Icon, Articles },
  data() {
    return {
      routeId: null,
      channel: null,
      articles: []
    };
  },
  watch: {
    $route() {
      this.saveRouteId();
      this.loadData(this.$route.params);
    }
  },
  methods: {
    saveRouteId() {
      this.routeId = this.$route.params;
    },
    loadData({ id }) {
      openChannel(id)
        .then(channel => {
          this.channel = channel;
          listArticleByChannel(channel)
            .then(articles => (this.articles = articles))
            .catch(err => console.error("listArticleByChannel", err));
        })
        .catch(err => console.error("openChannel", err));
    }
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
.header h2 {
  text-transform: capitalize;
}
</style>