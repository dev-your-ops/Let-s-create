<template>
  <div>
    <PrismCard class="mt-3" code="<Button>Default button</Button>">
      <Button>Default button</Button>
    </PrismCard>

    <PrismCard
      class="mt-3"
      code="<Button color='primary'>Primary button</Button>"
    >
      <Button color="primary">Primary button</Button>
    </PrismCard>

    <PrismCard
      class="mt-3"
      code="<Button color='secondary'>Secondary button</Button>"
    >
      <Button color="secondary">Secondary button</Button>
    </PrismCard>

    <PrismCard
      class="mt-3"
      code="<Button color='success'>Success button</Button>"
    >
      <Button color="success">Success button</Button>
    </PrismCard>

    <PrismCard
      class="mt-3"
      code="<Button color='danger'>Danger button</Button>"
    >
      <Button color="danger">Danger button</Button>
    </PrismCard>

    <PrismCard
      class="mt-3"
      code="<Button color='warning'>Warning button</Button>"
    >
      <Button color="warning">Warning button</Button>
    </PrismCard>

    <PrismCard
      class="mt-3"
      code="<Button color='primary' :loading='true'>Primary button</Button>"
    >
      <Button color="primary" :loading="true">
        Primary button
      </Button>
    </PrismCard>

    <PrismCard
      class="mt-3"
      code="<Button color='#1ca1e3' fontColor='#ffffff'>Custom button</Button>"
    >
      <Button color="#1ca1e3" fontColor="#ffffff">
        Custom button
      </Button>
    </PrismCard>
  </div>
</template>

<script>
export default {};
</script>
