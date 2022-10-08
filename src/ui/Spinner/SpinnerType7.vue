<template>
  <div
    class="ui-spinner-type-7"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      'border-top-color': color,
      border: `${size * 0.15}px solid #f3f3f3`,
      'border-top': `${size * 0.15}px solid ${color}`,
    }"
  />
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 40,
    },
    color: {
      type: String,
      default: 'black',
    },
  },
};
</script>

<style lang="scss">
.ui-spinner-type-7 {
  border-radius: 50%;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
