<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

    <div class="bg-white p-4 rounded shadow-lg w-96 h-150 relative">

      <button class="absolute top-2 right-2 text-red-600 hover:text-red-900 text-3xl" @click="$emit('close')">&times;</button>
      <img :src="imageSrc" alt="Floor Plan Image" class="w-full h-full object-cover" />
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
    imageSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.w-96 {
  width: 400px;
}
.h-150 {
  height: 600px;
}
</style>
