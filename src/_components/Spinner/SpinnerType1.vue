<template>
  <div
    class="ui-spinner-type-1"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      background: color,
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
.ui-spinner-type-1 {
  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;

  @-webkit-keyframes sk-rotateplane {
    0% {
      -webkit-transform: perspective(120px);
    }
    50% {
      -webkit-transform: perspective(120px) rotateY(180deg);
    }
    100% {
      -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
    }
  }

  @keyframes sk-rotateplane {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }
}
</style>
