<template>
  <div>
    <PrismCard title="Types" class="mt-3" :code="type">
      <div class="flex items-center flex-wrap">
        <Spinner type="square" />
        <Spinner type="squares" class="ml-3" />
        <Spinner type="dot" class="ml-3" />
        <Spinner type="dot-circle" class="ml-3" />
        <Spinner type="circle" class="ml-3" />
        <Spinner type="bar" class="ml-3" />
        <Spinner type="dots" class="ml-3" />
      </div>
    </PrismCard>
    <PrismCard title="Colors" class="mt-3" :code="color">
      <div class="flex items-center flex-wrap">
        <Spinner type="dot-circle" color="red" />
        <Spinner type="dot-circle" color="blue" class="ml-3" />
        <Spinner type="dot-circle" color="#f1af1e" class="ml-3" />
        <Spinner type="dot-circle" color="#51ac1e" class="ml-3" />
      </div>
    </PrismCard>
    <PrismCard title="Size" class="mt-3" :code="size">
      <div class="flex items-center flex-wrap">
        <Spinner type="dot-circle" :size="30" />
        <Spinner type="dot-circle" :size="50" class="ml-3" />
        <Spinner type="dot-circle" :size="75" class="ml-3" />
        <Spinner type="dot-circle" :size="100" class="ml-3" />
      </div>
    </PrismCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: `<div class="flex items-center">
  <Spinner type="square" />
  <Spinner type="squares"/>
  <Spinner type="dot" />
  <Spinner type="dot-circle" />
  <Spinner type="circle" />
  <Spinner type="bar" />
  <Spinner type="dots" />
</div>`,
      color: `<div class="flex items-center">
  <Spinner type="circle" color="red" />
  <Spinner type="circle" color="blue" />
  <Spinner type="circle" color="#f1af1e" />
  <Spinner type="circle" color="#51ac1e" />
</div>`,
      size: `<div class="flex items-center">
  <Spinner type="circle" :size="30" />
  <Spinner type="circle" :size="50" />
  <Spinner type="circle" :size="75" />
  <Spinner type="circle" :size="100" />
</div>`,
    };
  },
};
</script>
