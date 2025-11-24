<script setup>
  const {create} = defineProps({
    create : Function
  })
</script>

<template>
  <!-- Header -->
  <div class="d-flex justify-content-between align-items-center mb-3">
    <h3 class="m-0">Danh sách sản phẩm</h3>

    <button @click="create" class="btn btn-success btn-sm">
      + Tạo mới
    </button>
  </div>
</template>
