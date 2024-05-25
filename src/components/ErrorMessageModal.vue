<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-4 rounded shadow-lg w-96 relative">
      <button class="absolute top-2 right-2 text-red-600 hover:text-red-900 text-3xl" @click="close">&times;</button>
      <p class="text-red-700 text-xl">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style>
.w-96 {
  width: 400px;
}
</style>
