<template>
  <div>
    <PrismCard class="mt-3" :code="code">
      <Form @submit="handleSubmit">
        <Input label="test" name="test" />
        <Input name="test-no-label" class="mt-2 w-full" :required="true" />
        <Button type="submit" color="primary" class="mt-2">Envoyer</Button>
      </Form>
    </PrismCard>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit: (data) => console.log(data),
  },
  data() {
    return {
      code: `<Form @submit="handleSubmit"> // handleSubmit: data => console.log(data)
  <Input label="test" name="test" />
  <Input name="test-no-label" class="mt-2 w-full" />
  <Button type="submit" color="primary" class="mt-2">Envoyer</Button>
</Form>`,
    };
  },
};
</script>
