<template>
  <div class="container mt-4">
    <div class="card shadow-sm">
      <div class="card-body">

        <!-- Header -->
        <h3 class="mb-3">Thêm sản phẩm</h3>

        <!-- Form -->
        <div class="mb-3">
          <label class="form-label">Tên sản phẩm</label>
          <input
              v-model="name"
              class="form-control"
              placeholder="Nhập tên sản phẩm..."
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Giá</label>
          <input
              v-model="price"
              class="form-control"
              type="number"
              placeholder="Nhập giá..."
          />
        </div>

        <!-- Buttons -->
        <div class="d-flex gap-2">
          <button @click="submit" class="btn btn-primary">
            Lưu
          </button>

          <button @click="goBack" class="btn btn-secondary">
            Quay lại
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import productApi from "@/api/productApi";

const router = useRouter();

const name = ref("");
const price = ref("");

async function submit() {
  if (!name.value || !price.value) {
    alert("Vui lòng nhập đủ thông tin.");
    return;
  }

  await productApi.create({
    name: name.value,
    price: price.value,
  });

  router.push("/products");
}

function goBack() {
  router.push("/products");
}
</script>
