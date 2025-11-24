<script setup>
const props = defineProps({
  modelValue: String,
  load: Function,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <input
      :value="props.modelValue"
      @input="
      emit('update:modelValue', $event.target.value);
      props.load(1);
    "
      placeholder="Tìm kiếm sản phẩm..."
      class="form-control mb-3"
  />
</template>
