<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">House Units</h1>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-if="error" class="text-center text-red-500">Error: {{ error.message }}</div>
    <div v-if="houseUnits.length > 0" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div 
        v-for="unit in houseUnits" 
        :key="unit.unitLabel" 
        @click="showDetails(unit)" 
        class="border p-4 cursor-pointer hover:shadow-lg transition-shadow shadow-md"
      >
        <h2 class="text-xl font-semibold">{{ unit.unitLabel }}</h2>
        <p>{{ unit.unitDescription || ' - ' }}</p>
        <p>Number of Floors: {{ unit.noOfFloors || ' - ' }}</p>
        <p>Number of Bedrooms: {{ unit.noOfBedrooms || ' - ' }}</p>
        <p>Number of Bathrooms: {{ unit.noOfBathrooms || ' - ' }}</p>
        <p>Total Area: {{ unit.totalArea || ' - ' }}</p>
        <p>Starting Price: {{ unit.startingPrice || ' - ' }}</p>
      </div>
    </div>
    <div v-if="selectedHouseUnit" class="mt-8">
      <h2 class="text-2xl font-bold">{{ selectedHouseUnit.unitLabel }}</h2>
      <img 
        :src="selectedHouseUnit.floorPlan.generalImageOne.url" 
        alt="Floor Plan Image" 
        v-if="selectedHouseUnit.floorPlan.generalImageOne" 
        class="mt-4"
      >
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_HOUSE_UNITS } from '../queries';

export default {
  setup() {
    const { result, loading, error } = useQuery(GET_HOUSE_UNITS);
    const houseUnits = ref([]);
    const selectedHouseUnit = ref(null);

    watch(result, (newResult) => {
      if (newResult && newResult.project) {
        houseUnits.value = newResult.project.houseUnitTypes;
      }
    });

    const showDetails = (unit) => {
      selectedHouseUnit.value = unit;
    };

    return { houseUnits, loading, error, selectedHouseUnit, showDetails };
  },
};
</script>

<style>
.container {
  max-width: 1200px;
}
</style>
