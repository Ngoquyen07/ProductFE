<template>
  <div class="container mt-4">

    <div class="card shadow-sm">
      <div class="card-body">

        <Header :create="goCreate"/>
        <Search v-model="search" :load="loadProducts" />
        <!-- Table -->
        <Table />

        <!-- Pagination -->
        <Pagination :prevPage="prevPage" :nextPage="nextPage" :pagination="pagination" />

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, provide} from "vue";
import { useRouter } from "vue-router";
import productApi from "@/api/productApi";
import Header from "@/components/listComponents/Header.vue";
import Search from "@/components/listComponents/Search.vue";
import Table from "@/components/listComponents/Table.vue";
import Pagination from "@/components/listComponents/Pagination.vue";

const router = useRouter();

const products = ref([]);
const pagination = ref<any>({});
const search = ref("");
const currentPage = ref(1);

async function loadProducts(page = 1) : Promise<void> {
  const res = await productApi.getAll({
    page,
    search: search.value,
  });

  products.value = res.data.data;
  pagination.value = res.data;
  currentPage.value = res.data.current_page;
  console.log(res.data);
}

function nextPage() { loadProducts(currentPage.value + 1); }
function prevPage() { loadProducts(currentPage.value - 1); }

function goCreate() {
  router.push("/products/create");
}

function goEdit(id: number) {
  router.push(`/products/${id}/edit`);
}

async function remove(id: number) :Promise<void> {
  if (confirm("Xóa sản phẩm?")) {
    await productApi.delete(id);
    await loadProducts(currentPage.value);
  }
}

provide('onEdit',goEdit) ;
provide('onDelete',remove) ;
provide('products',products) ;
onMounted(() => loadProducts());
</script>
