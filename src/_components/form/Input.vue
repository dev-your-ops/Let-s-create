<template>
  <BaseInput
    :value="inputValue"
    :name="name"
    :isValid="isValid"
    :label="label"
    :errorMessage="errorMessage"
    class="ui-form-input w-64"
  >
    <input
      :placeholder="placeholder"
      name="test"
      type="text"
      class="focus:outline-none border border-gray-400 rounded p-1 w-full"
      :class="inputClass + !isValid && errorMessage ? 'border-red-400' : ''"
      v-model="inputValue"
    />
  </BaseInput>
</template>

<script>
import BaseInput from '@/ui/form/BaseInput';

export default {
  name: 'Input',
  components: {BaseInput},
  computed: {
    isValid() {
      if (this.required && !this.inputValue) {
        return false;
      }
      return true;
    },
  },
  watch: {
    value() {
      this.inputValue = this.value;
    },
    inputValue() {
      if (this.required && !this.inputValue) {
        this.errorMessage = 'le champ est vide';
      }
    },
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    inputClass: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    value: {},
  },
  data() {
    return {
      inputValue: this.value,
      errorMessage: '',
    };
  },
};
</script>

<style lang="scss">
.ui-form-input {
}
</style>
