<script setup>

import TableRow from "@/components/listComponents/TableRow.vue";
import TableHeader from "@/components/listComponents/TableHeader.vue";
</script>

<template>
  <table class="table table-striped table-hover align-middle">
    <thead class="table-primary">
      <TableHeader/>
    </thead>
    <tbody>
      <TableRow/>
    </tbody>
  </table>
</template>

<style scoped>

</style>