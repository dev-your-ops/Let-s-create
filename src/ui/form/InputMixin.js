export default (base = false) => {
  if (base) {
    return {
      created() {},
    };
  }

  return {
    created() {
      this.$parent.$emit('change', {
        name: this.name,
        value: this.value,
        isValid: this.isValid,
      });
    },
    watch: {
      value() {
        this.$parent.$emit('change', {
          name: this.name,
          value: this.value,
          isValid: this.isValid,
        });
        this.$emit('change', {
          name: this.name,
          value: this.value,
          isValid: this.isValid,
        });
      },
    },
    props: {
      name: {
        type: String,
        required: true,
      },
    },
  };
};
