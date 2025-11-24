<script setup>
  import {inject} from "vue";

  const onEdit = inject('onEdit');
  const onDelete = inject('onDelete');
  const products = inject('products');
</script>

<template>
  <tr v-for="p in products" :key="p.id">
    <td>{{ p.id }}</td>
    <td>{{ p.name }}</td>
    <td>{{ p.price }}</td>
    <td>
      <div class="btn-group">
        <button @click="onEdit(p.id)" class="btn btn-warning btn-sm">
          Sửa
        </button>
        <button @click="onDelete(p.id)" class="btn btn-danger btn-sm">
          Xóa
        </button>
      </div>
    </td>
  </tr>
  <tr v-if="products.length === 0">
    <td colspan="4" class="text-center text-muted py-3">
      Không có sản phẩm nào
    </td>
  </tr>
</template>

<style scoped>

</style>