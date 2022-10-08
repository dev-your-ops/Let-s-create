<template>
  <div
    class="ui-spinner-type-4"
    :style="{
      width: `${size}px`,
      height: `${size / 1.55}px`,
    }"
  >
    <div class="rect1" :style="{background: color}" />
    <div class="rect2" :style="{background: color}" />
    <div class="rect3" :style="{background: color}" />
    <div class="rect4" :style="{background: color}" />
    <div class="rect5" :style="{background: color}" />
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
.ui-spinner-type-4 {
  text-align: center;
  font-size: 10px;

  & > div {
    height: 100%;
    width: 18%;
    margin: 0 1%;
    display: inline-block;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
    }
  }

  @keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
      -webkit-transform: scaleY(1);
    }
  }
}
</style>
