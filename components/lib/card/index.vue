<template>
  <div class="it-card">
    <div :class="`is-${shadow}-shadow`"></div>
    <div class="it-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "it-card",
  props: {
    bodyStyle: {
      type: Object,
      default: () => {
        return { padding: "20px" };
      },
    },
    shadow: {
      type: String,
      default: "always",
    },
  },
};
</script>

<style lang="scss" scoped></style>
