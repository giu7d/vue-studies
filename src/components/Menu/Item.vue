<template>
  <li class="item">
    <a class="link" href="#">
      <i
        class="icon"
        :style="{ 'mask-image': `url(${require(`../../assets/icons/evericons/${icon}.svg`)})`}"
      />
      <span class="description">{{ description }}</span>
    </a>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    description: String,
    link: String,
    icon: String
  }
};
</script>

<style>
.item {
  width: 100%;
}

.link {
  display: flex;
  height: 5rem;
  align-items: center;

  color: var(--text-primary);
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--trasition-speed);
}

.link:hover {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  filter: grayscale(0%) opacity(1);
  transition: var(--trasition-speed);
}

.link:hover .icon {
  transform: rotate(360deg);
}

.description {
  display: none;
  margin-left: 1rem;
}

.icon {
  width: 2rem;
  height: 2rem;
  margin: 0 1.5rem;
  background: var(--primary);
  mask-size: cover;
  mask-repeat: no-repeat;
  /* mask-image: url(--icon); */
  transform: rotate(0);
  transition: var(--trasition-speed);
}

@media only screen and (max-width: 600px) {
  .link {
    justify-content: center;
    min-width: 5rem;
  }

  .link:hover .description {
    display: inline;
    margin-right: 1.5rem;
  }
}
</style>