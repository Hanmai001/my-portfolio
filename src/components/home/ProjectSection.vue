<script setup>
import { onMounted, ref } from 'vue'
import { projects } from '@/data/projects'
const isShow = ref(false)
const scrollThreshold = window.innerWidth <= 768 ? 4200 : 2400

onMounted(() => {
  const handleScroll = () => {
    if (window.scrollY >= scrollThreshold) {
      isShow.value = true
    }
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <section class="project-section" id="projects">
    <h2 class="project-title">
      My
      <span class="text-primary">Projects</span>
    </h2>

    <div v-if="projects" class="project-list">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        :class="['project-item', isShow ? 'show' : 'hide']"
        :style="{ transitionDelay: isShow ? `${index * 300}ms` : '0ms' }"
      >
        <RouterLink :to="`/projects/${project.id}`">
          <div class="project-avatar">
            <div class="avatar-wrapper">
              <img :src="project.avatar" :alt="project.name" />
            </div>

            <div class="project-name">
              <p>{{ project.name }}</p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-section {
  @apply w-full;
}
.project-title {
  @apply text-2xl md:text-4xl font-bold text-center mb-6;
}
.project-list {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4;
}
.project-avatar {
  @apply relative overflow-hidden w-full rounded-lg;
  padding-top: 90%;
}
.avatar-wrapper {
  @apply absolute inset-0;
}
.avatar-wrapper img {
  @apply absolute inset-0 w-full h-full object-cover duration-500;

  &:hover {
    @apply scale-110 duration-500 rotate-6;
  }
}
.project-name {
  @apply absolute bottom-3 right-4 left-4 bg-black bg-opacity-60 text-white px-3 py-4 rounded-md;
}
.project-item {
  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;
}

.hide {
  opacity: 0;
  transform: scale(0);
}
.show {
  opacity: 1;
  transform: scale(1);
}
</style>
