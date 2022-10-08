<template>
  <div class="ui-form-base-input">
    <div v-if="label && label.length" class="text-lg">{{ label }}</div>
    <div class="text-red-500" v-if="!isValid && errorMessage">
      {{ errorMessage }}
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  created() {
    this.$parent.$emit('change', {
      name: this.name,
      value: this.value,
      isValid: this.isValid,
    });
    if (this.parentCaintainer) {
      this.parentCaintainer.$emit('change', {
        name: this.name,
        value: this.value,
        isValid: this.isValid,
      });
    }
  },
  computed: {
    parentCaintainer() {
      let currentElem = this.$parent.$parent;
      while (
        currentElem &&
        currentElem.$parent &&
        currentElem.$options &&
        currentElem.$options._componentTag !== 'Form'
      ) {
        currentElem = currentElem.$parent;
      }
      return currentElem && currentElem.$options._componentTag === 'Form'
        ? currentElem
        : null;
    },
  },
  watch: {
    value() {
      this.$parent.$emit('change', {
        name: this.name,
        value: this.value,
        isValid: this.isValid,
      });
      if (this.parentCaintainer) {
        this.parentCaintainer.$emit('change', {
          name: this.name,
          value: this.value,
          isValid: this.isValid,
        });
      }
    },
  },
  props: {
    value: {
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    isValid: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-form-base-input {
}
</style>
