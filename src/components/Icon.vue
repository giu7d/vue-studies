<template>
  <i
    class="icon"
    :style="{ 'mask-image': `url(${require(`../assets/icons/evericons/${icon}.svg`)})`}"
  />
</template>

<script>
export default {
  name: "Icon",
  props: {
    icon: String
  }
};
</script>

<style>
.icon {
  width: 2rem;
  height: 2rem;
  margin: 0 1.5rem;
  background: var(--primary);
  mask-size: cover;
  mask-repeat: no-repeat;
  transform: rotate(0);
  transition: var(--trasition-speed);
}
</style>