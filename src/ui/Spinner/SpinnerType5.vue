<template>
  <div
    class="ui-spinner-type-5"
    :style="{
      width: `${size}px`,
      height: `${size * 0.4}px`,
    }"
  >
    <div
      class="bounce1"
      :style="{
        background: color,
        width: `${size * 0.3}px`,
        height: `${size * 0.3}px`,
      }"
    />
    <div
      class="bounce2"
      :style="{
        background: color,
        width: `${size * 0.3}px`,
        height: `${size * 0.3}px`,
      }"
    />
    <div
      class="bounce3"
      :style="{
        background: color,
        width: `${size * 0.3}px`,
        height: `${size * 0.3}px`,
      }"
    />
  </div>
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
.ui-spinner-type-5 {
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > div {
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
}
</style>
