<template>
  <div v-if="houseUnit">
    <h2>{{ houseUnit.unitLabel || ' – ' }}</h2>
    <div v-if="houseUnit.floorPlan">
      <img :src="houseUnit.floorPlan.generalImageOne.url" alt="General Image" v-if="houseUnit.floorPlan.generalImageOne" />
      <img :src="houseUnit.floorPlan.groundFloorPlan.url" alt="Ground Floor Plan" v-if="houseUnit.floorPlan.groundFloorPlan" />
      <img :src="houseUnit.floorPlan.firstFloorPlan.url" alt="First Floor Plan" v-if="houseUnit.floorPlan.firstFloorPlan" />
      <img :src="houseUnit.floorPlan.secondFloorPlan.url" alt="Second Floor Plan" v-if="houseUnit.floorPlan.secondFloorPlan" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    houseUnit: Object,
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 16px;
}
</style>
