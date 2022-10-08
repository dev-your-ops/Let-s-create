<template>
  <span
    @click="$emit('click')"
    :class="badgeClass"
    class="rounded-lg px-2 py-1 shadow-md"
    :style="{
      ...(color.includes('#') ? {background: color} : {}),
      ...(fontColor ? {color: fontColor} : {}),
    }"
  >
    <slot />
  </span>
</template>

<script>
export default {
  name: 'Badge',
  computed: {
    badgeClass() {
      switch (this.color) {
        case 'primary':
          return 'bg-blue-500 text-blue-100';
        case 'secondary':
          return 'bg-teal-500 text-teal-100';
        case 'success':
          return 'bg-green-500 text-green-100';
        case 'danger':
          return 'bg-red-500 text-red-100';
        case 'warning':
          return 'bg-orange-500 text-orange-100';
        case 'default':
          return 'bg-gray-300 text-gray-600';
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
    size: {
      type: String,
      default: 'default',
    },
    fontColor: {
      type: String,
      default: '',
    },
  },
};
</script>
