<template>
  <div
    class="ui-spinner-type-2"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
    }"
  >
    <div v-for="n in 6" :key="n">
      <div :style="{background: color}" />
    </div>
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
.ui-spinner-type-2 {
  position: relative;
  animation: sk-chase 2.5s infinite linear both;

  & > div {
    padding: 8px;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: sk-chase-dot 2s infinite ease-in-out both;

    & > div {
      content: '';
      display: block;
      width: 15%;
      height: 15%;
      border-radius: 100%;
      // animation: sk-chase-dot-before 2s infinite ease-in-out both;
    }

    &:nth-child(1) {
      animation-delay: -1.1s;
      &:before {
        animation-delay: -1.1s;
      }
    }
    &:nth-child(2) {
      animation-delay: -1s;
      &:before {
        animation-delay: -1s;
      }
    }
    &:nth-child(3) {
      animation-delay: -0.9s;
      &:before {
        animation-delay: -0.9s;
      }
    }
    &:nth-child(4) {
      animation-delay: -0.8s;
      &:before {
        animation-delay: -0.8s;
      }
    }
    &:nth-child(5) {
      animation-delay: -0.7s;
      &:before {
        animation-delay: -0.7s;
      }
    }
    &:nth-child(6) {
      animation-delay: -0.6s;
      &:before {
        animation-delay: -0.6s;
      }
    }
  }

  @keyframes sk-chase {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-chase-dot {
    80%,
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes sk-chase-dot-before {
    50% {
      transform: scale(0.4);
    }
    100%,
    0% {
      transform: scale(1);
    }
  }
}

.two-dot {
  position: relative;

  & > div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: black;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 2s infinite ease-in-out;
    animation: sk-bounce 2s infinite ease-in-out;

    &:nth-child(2) {
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    }
  }

  @-webkit-keyframes sk-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }
    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
}
</style>
