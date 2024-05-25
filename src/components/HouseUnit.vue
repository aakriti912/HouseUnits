<template>
  <div class="house-unit" @click="showDetails">
    <h2>{{ houseUnit.unitLabel || ' – ' }}</h2>
    <p>{{ houseUnit.unitDescription || ' – ' }}</p>
    <p>Floors: {{ houseUnit.noOfFloors || ' – ' }}</p>
    <p>Bedrooms: {{ houseUnit.noOfBedrooms || ' – ' }}</p>
    <p>Bathrooms: {{ houseUnit.noOfBathrooms || ' – ' }}</p>
    <p>Total Area: {{ houseUnit.totalArea || ' – ' }}</p>
    <p>Starting Price: {{ houseUnit.startingPrice || ' – ' }}</p>
  </div>
</template>

<script>
export default {
  props: {
    houseUnit: Object,
  },
  methods: {
    showDetails() {
      this.$emit('show-details', this.houseUnit);
    },
  },
};
</script>

<style scoped>
.house-unit {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  cursor: pointer;
}
</style>
