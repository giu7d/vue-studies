<template>
  <div class="card">
    <div class="card-content">
      <small class="channels">
        <span v-for="channel in channels" :key="channel">{{channel}}</span>
      </small>
      <h2 class="title">{{title}}</h2>
      <small class="author">{{author}}</small>
      <p class="abstract">{{abstract}}</p>
    </div>
    <div class="card-actions">
      <a href="#" class="btn">
        <Icon icon="basic/flame" />
      </a>
      <a href="#" class="btn">
        <Icon icon="basic/share" />
      </a>
    </div>
  </div>
</template>

<script>
import Icon from "../components/Icon";
export default {
  name: "Card",
  props: {
    title: String,
    channels: Array,
    author: String,
    abstract: String
  },
  components: { Icon }
};
</script>

<style>
.card {
  display: flex;
  flex-direction: row;
  height: 350px;
  overflow: hidden;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 2rem 1rem 1rem 5rem;
}

.card-content {
  cursor: pointer;
  overflow: hidden;
  background: linear-gradient(180deg, white 95%, rgba(0, 0, 0, 0.05));
}

.title {
  display: block;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  font-size: 3rem;
  color: var(--bg-primary);
}

.author {
  display: block;
  text-transform: uppercase;
  font-size: 1rem;
  margin-bottom: 2rem;
  color: var(--secondary);
}

.channels {
  display: block;
  text-transform: uppercase;
  font-size: 1rem;
  color: var(--bg-primary);
  opacity: 0.25;
}

.channels span {
  margin-left: 0.5rem;
}

.abstract {
  text-align: justify;
  opacity: 0.8;
}

.btn {
  display: flex;
  height: 5rem;
  align-items: center;

  color: var(--text-primary);
  text-decoration: none;
  filter: grayscale(100%) opacity(0.25);
  transition: var(--trasition-speed);
}

.btn:hover {
  color: var(--text-primary);
  filter: grayscale(0%) opacity(1);
  transition: var(--trasition-speed);
}
</style>