<template>
  <div class="container mt-4">

    <div class="card shadow-sm">
      <div class="card-body">

        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h3 class="m-0">Danh sách sản phẩm</h3>

          <button @click="goCreate()" class="btn btn-success btn-sm">
            + Tạo mới
          </button>
        </div>

        <!-- Search -->
        <input
            v-model="search"
            @input="loadProducts(1)"
            placeholder="Tìm kiếm sản phẩm..."
            class="form-control mb-3"
        />

        <!-- Table -->
        <table class="table table-striped table-hover align-middle">
          <thead class="table-primary">
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giá</th>
            <th style="width: 180px;">Hành động</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="p in products" :key="p.id">
            <td>{{ p.id }}</td>
            <td>{{ p.name }}</td>
            <td>{{ p.price }}</td>
            <td>
              <div class="btn-group">
                <button @click="goEdit(p.id)" class="btn btn-warning btn-sm">
                  Sửa
                </button>
                <button @click="remove(p.id)" class="btn btn-danger btn-sm">
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
          </tbody>
        </table>

        <!-- Pagination -->
        <div class="d-flex justify-content-between align-items-center mt-3">
          <button
              :disabled="!pagination.prev_page_url"
              @click="prevPage"
              class="btn btn-outline-primary btn-sm"
          >
            ← Prev
          </button>

          <span>
            Trang <strong>{{ pagination.current_page }}</strong>
            /
            {{ pagination.last_page }}
          </span>

          <button
              :disabled="!pagination.next_page_url"
              @click="nextPage"
              class="btn btn-outline-primary btn-sm"
          >
            Next →
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import productApi from "@/api/productApi";

const router = useRouter();

const products = ref([]);
const pagination = ref<any>({});
const search = ref("");
const currentPage = ref(1);

async function loadProducts(page = 1) {
  const res = await productApi.getAll({
    page,
    search: search.value,
  });

  products.value = res.data.data;
  pagination.value = res.data;
  currentPage.value = res.data.current_page;
}

function nextPage() { loadProducts(currentPage.value + 1); }
function prevPage() { loadProducts(currentPage.value - 1); }

function goCreate() {
  router.push("/products/create");
}

function goEdit(id: number) {
  router.push(`/products/${id}/edit`);
}

async function remove(id: number) {
  if (confirm("Xóa sản phẩm?")) {
    await productApi.delete(id);
    loadProducts(currentPage.value);
  }
}

onMounted(() => loadProducts());
</script>
