<template>
  <div class="relative">
    <img src="https://media.graphassets.com/sR2G2NOFRhislVZtOTSv" class="w-full h-[300px]  object-cover" />
    <div class="absolute inset-0 flex flex-col justify-center items-center text-center">
      <h1 class="text-3xl font-bold text-blue-500">Manamaiju Residency House Units</h1>
      <p class="text-xl p-4 text-red-300">{{ project.shortDescription }}</p>
    </div>
  </div>
  <div class="container mx-auto p-4 relative">
    <Loader v-if="loading" />
        <h1 class="text-3xl font-bold text-center text-blue-500 p-4">Types of House Units</h1>
    <div v-if="error" class="text-center text-red-500">Error: {{ error.message }}</div>
    <div v-if="houseUnits.length > 0" class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

      <div 
        v-for="unit in houseUnits" 
        :key="unit.unitLabel" 
        @click="showDetails(unit)" 
        class="border p-4 cursor-pointer hover:shadow-lg transition-transform transform hover:scale-105 hover:rotate-1 hover:-translate-y-1 shadow-md relative"
      >
 
        <div class="relative">
      
          <h2 class="text-2xl font-semibold">{{ unit.unitLabel }}</h2>
          <p class="text-blue-500 text-md">{{ unit.unitDescription || ' - ' }}</p>
          <p class="text-red-700 text-md">Number of Floors: {{ unit.noOfFloors || ' - ' }}</p>
          <p class="text-red-700 text-md">Number of Bedrooms: {{ unit.noOfBedrooms || ' - ' }}</p>
          <p class="text-red-700 text-md">Number of Bathrooms: {{ unit.noOfBathrooms || ' - ' }}</p>
          <p class="text-red-700 text-md">Total Area: {{ unit.totalArea || ' - ' }}</p>
          <p class="text-red-700 text-md">Starting Price: {{ unit.startingPrice || ' - ' }}</p>
          <div class="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p class="text-white text-center">Click here to see the image</p>
          </div>
        </div>
      </div>
    </div>
    <HouseUnitModal 
      v-if="selectedHouseUnit && selectedHouseUnit.floorPlan && selectedHouseUnit.floorPlan.generalImageOne" 
      :show="showModal" 
      :imageSrc="selectedHouseUnit.floorPlan.generalImageOne.url" 
      @close="showModal = false"
    />
    <ErrorMessageModal v-if="errorMessage" :message="errorMessage" @close="errorMessage = ''" />
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_HOUSE_UNITS } from '../queries/index.js';
import HouseUnitModal from '../components/HouseUnitModal.vue';
import Loader from '../components/LoaderModal.vue';
import ErrorMessageModal from '../components/ErrorMessageModal.vue';

export default {
  components: {
    HouseUnitModal,
    Loader,
    ErrorMessageModal,
  },
  setup() {
    const { result, loading, error } = useQuery(GET_HOUSE_UNITS);
    const project = ref(null);
    const houseUnits = ref([]);
    const selectedHouseUnit = ref(null);
    const showModal = ref(false);
    const errorMessage = ref('');

    watch(result, (newResult) => {
      if (newResult && newResult.project) {
        project.value = newResult.project;
        houseUnits.value = newResult.project.houseUnitTypes;
      }
    });

    const showDetails = (unit) => {
      selectedHouseUnit.value = unit;
      showModal.value = true;
      if (!unit.floorPlan || !unit.floorPlan.generalImageOne) {
        errorMessage.value = 'Image not available for this unit.';
      }
    };

    if (error) {
      errorMessage.value = error.message || 'An error occurred.';
    }

    return { project, houseUnits, loading, error, selectedHouseUnit, showModal, showDetails, errorMessage };
  },
};
</script>

<style>
.container {
  max-width: 1200px;
}

.overlay {
  transition: opacity 0.3s ease;
}
</style>
