<script setup>
  const props = defineProps({
    prevPage : Function ,
    nextPage : Function ,
    pagination : Object
  })
</script>

<template>
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
</template>

<style scoped>

</style>