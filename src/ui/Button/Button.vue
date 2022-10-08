<template>
  <button
    @click="$emit('click')"
    :class="btnClass"
    class="ui-button rounded-lg px-5 py-2 shadow-md focus:outline-none"
    :type="type"
    :style="{
      ...(color.includes('#') ? {background: color} : {}),
      ...(fontColor ? {color: fontColor} : {}),
    }"
  >
    <div v-if="loading" class="spinner">
      <Spinner :color="spinnerColor" :type="spinnerType" />
    </div>

    <div :class="slotClass">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  name: 'Button',
  computed: {
    slotClass() {
      let res = '';
      if (this.loading) {
        res += 'opacity-0 block';
      }
      return res;
    },
    spinnerClass() {
      switch (this.color) {
        case 'primary':
          return 'bg-blue-300';
        case 'secondary':
          return 'bg-teal-300';
        case 'success':
          return 'bg-green-300';
        case 'danger':
          return 'bg-red-300';
        case 'warning':
          return 'bg-orange-300';
        case 'default':
          return 'bg-gray-500';
        default:
          return 'bg-gray-400';
      }
    },
    btnClass() {
      switch (this.color) {
        case 'primary':
          return 'bg-blue-500 hover:bg-blue-600 text-white';
        case 'secondary':
          return 'bg-teal-500 hover:bg-teal-600 text-white';
        case 'success':
          return 'bg-green-500 hover:bg-green-600 text-white';
        case 'danger':
          return 'bg-red-500 hover:bg-red-600 text-white';
        case 'warning':
          return 'bg-orange-500 hover:bg-orange-600 text-white';
        case 'default':
          return 'bg-gray-300 hover:bg-gray-400 text-gray-700';
        default:
          return '';
      }
    },
  },
  props: {
    color: {
      type: String,
      default: 'default',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
    },
    fontColor: {
      type: String,
      default: '',
    },
    spinnerColor: {
      type: String,
      default: '#fefefe',
    },
    spinnerType: {
      type: String,
      default: 'dots',
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-button {
  position: relative;

  .spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
