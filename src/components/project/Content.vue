<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects'
import { initFlowbite } from 'flowbite'

const route = useRoute()
const id = ref(route.params.id)
const item = ref(null)

const findProject = () => {
  item.value = projects.find((project) => project.id.toString() === id.value)
}

watch(id, (newId) => {
  findProject()
})

findProject()

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div v-if="item" class="wrapper">
    <div
      v-if="item.images"
      id="default-carousel"
      class="relative w-full pr-4"
      data-carousel="static"
    >
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div
          v-for="(image, index) in item.images"
          :key="index"
          :class="['duration-700 ease-in-out', { block: index === 0, hidden: index !== 0 }]"
          data-carousel-item
        >
          <img
            :src="image.src"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-primary hover:text-white"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/50 group-hover:bg-primary/80"
        >
          <svg
            class="w-4 h-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none text-primary hover:text-white"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/50 group-hover:bg-primary/80"
        >
          <svg
            class="w-4 h-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
    <div v-else class="flex items-center justify-center">
      <p>I'm so apologized, this project is out of the version:(</p>
    </div>

    <div class="project-description">
      <div class="flex flex-col mt-4 md:mt-0 md:flex-row justify-between md:items-center">
        <h1 class="project-name">
          {{ item.name }}
        </h1>

        <p class="text-gray-500 text-sm">{{ item.time }}</p>
      </div>
      <div>
        <h4 class="font-bold">Front-end :</h4>
        <p class="text-gray-600">{{ item.technology.front }}</p>
      </div>
      <div>
        <h4 class="font-bold">Back-end :</h4>
        <p class="text-gray-600">{{ item.technology.back }}</p>
      </div>
      <p class="text-gray-600">{{ item.description }}</p>

      <a v-if="item.link" target="_blank" :href="item.link" class="w-full">
        <div class="py-3 text-center bg-primary/90 rounded-lg hover:bg-primary text-white">
          Visit my website
        </div>
      </a>

      <button v-else class="py-3 bg-primary/90 rounded-lg hover:bg-primary text-white">
        Not deploy yet:(
      </button>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped>
.wrapper {
  @apply grid grid-cols-1 md:grid-cols-2 mt-2;
}
.project-description {
  @apply flex flex-col gap-4 md:gap-0 justify-between md:border-l md:px-4;
}
.project-name {
  @apply text-2xl font-medium;
}
</style>
