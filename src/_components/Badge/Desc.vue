<template>
  <div>
    <PrismCard title="Colors" class="mt-3" :code="color">
      <Badge>
        default
      </Badge>
      <Badge class="ml-2" color="primary">
        primary
      </Badge>
      <Badge class="ml-2" color="success">
        success
      </Badge>
      <Badge class="ml-2" color="danger">
        danger
      </Badge>
      <Badge class="ml-2" color="warning">
        warning
      </Badge>
      <Badge class="ml-2" color="#1ca1e3" fontColor="#ffffff">
        #1ca1e3
      </Badge>
      <Badge class="ml-2" color="#a5a1e3" fontColor="#f1f1f1">
        #a5a1e3
      </Badge>
    </PrismCard>
    <PrismCard title="Size" class="mt-3" :code="size" langage="html">
      <Badge class="text-xs">
        xs
      </Badge>
      <Badge class="text-sm ml-2">
        sm
      </Badge>
      <Badge class="ml-2">
        default
      </Badge>
      <Badge class="text-lg ml-2">
        lg
      </Badge>
      <Badge class="text-xl ml-2">
        xl
      </Badge>
      <Badge class="text-2xl ml-2">
        2xl
      </Badge>
      <Badge class="text-3xl ml-2">
        3xl
      </Badge>
      <Badge class="text-4xl ml-2">
        4xl
      </Badge>
      <Badge class="text-5xl ml-2">
        5xl
      </Badge>
      <Badge class="text-6xl ml-2">
        6xl
      </Badge>
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
      color: `<Badge>
  default
</Badge>
<Badge color="primary">
  primary
</Badge>
<Badge color="success">
  success
</Badge>
<Badge color="danger">
  danger
</Badge>
<Badge color="warning">
  warning
</Badge>
<Badge class="ml-2" color="#1ca1e3" fontColor="#ffffff">
  #1ca1e3
</Badge>
<Badge class="ml-2" color="#a5a1e3" fontColor="#f1f1f1">
  #a5a1e3
</Badge>`,
      size: `<Badge class="text-xs">
  xs
</Badge>
<Badge class="text-sm">
  sm
</Badge>
<Badge class="text-base">
  base
</Badge>
<Badge class="text-lg">
  lg
</Badge>
<Badge class="text-xl">
  xl
</Badge>
<Badge class="text-2xl">
  2xl
</Badge>
<Badge class="text-3xl">
  3xl
</Badge>
<Badge class="text-4xl">
  4xl
</Badge>
<Badge class="text-5xl">
  5xl
</Badge>
<Badge class="text-6xl">
  6xl
</Badge>`,
    };
  },
};
</script>
