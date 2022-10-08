<template>
  <form class="ui-form" @submit.prevent="$emit('submit', form)">
    <slot />
  </form>
</template>

<script>
export default {
  name: 'Form',
  created() {
    this.$on('change', (e) => {
      this.form[e.name] = e.value;
    });
  },
  data() {
    return {
      form: {},
    };
  },
};
</script>

<style lang="scss">
.ui-form {
}
</style>
