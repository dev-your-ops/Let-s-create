<template>
  <div class="ui-spinner">
    <component :is="spinner" :color="color" :size="size" />
  </div>
</template>

<script>
import SpinnerType1 from './SpinnerType1';
import SpinnerType2 from './SpinnerType2';
import SpinnerType3 from './SpinnerType3';
import SpinnerType4 from './SpinnerType4';
import SpinnerType5 from './SpinnerType5';
import SpinnerType6 from './SpinnerType6';
import SpinnerType7 from './SpinnerType7';

export default {
  name: 'Spinner',
  components: {
    SpinnerType1,
    SpinnerType2,
    SpinnerType3,
    SpinnerType4,
    SpinnerType5,
    SpinnerType6,
    SpinnerType7,
  },
  computed: {
    spinner() {
      switch (this.type) {
        case 'square':
          return SpinnerType1;
        case 'dot-circle':
          return SpinnerType2;
        case 'dot':
          return SpinnerType3;
        case 'bar':
          return SpinnerType4;
        case 'dots':
          return SpinnerType5;
        case 'squares':
          return SpinnerType6;
        case 'circle':
          return SpinnerType7;
        default:
          return SpinnerType1;
      }
    },
  },
  props: {
    type: {
      type: String,
      default: 'square',
    },
    size: {
      type: Number,
      default: 50,
    },
    color: {
      type: String,
      default: 'black',
    },
  },
};
</script>

<style lang="scss">
.ui-spinner {
}
</style>
