<script setup>
import { onMounted, ref } from 'vue'

const isShow = ref(false)
const scrollThreshold = window.innerWidth <= 768 ? 2600 : 1600
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
  <section class="experience-section" id="experience">
    <div class="wrapper">
      <h2 class="experience-title">
        My
        <span class="text-primary">Experience</span>
      </h2>

      <div class="experience-content">
        <div>
          <h3 class="text-xl font-medium mb-3">Education</h3>
          <div class="experience-education">
            <div :class="['experience-card', isShow ? 'show' : 'hide']">
              <p class="text-gray-500 my-4">Octorber 2020 - Present</p>
              <h3 class="text-lg font-medium text-primary">Bachelor in Software Engineering</h3>
              <p class="text-gray-500 my-4">
                I'm currently enrolled in Bachelor's Software Engineering at University of Science,
                Ho Chi Minh City.
              </p>
              <p class="font-semibold">GPA: <span>3.65</span></p>
            </div>

            <div :class="['experience-card', isShow ? 'show' : 'hide']">
              <p class="text-gray-500 my-4">Updating...</p>
              <h3 class="text-lg font-medium text-primary">IELTS</h3>
              <p class="text-gray-500 my-4">
                I'm going to take the IELTS test on 22 June with the aim at 7.0. Good luck to me ^^
              </p>
              <p class="font-semibold">Overall: <span></span></p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-medium mb-3">Experience</h3>
          <div class="experience-education">
            <div :class="['experience-card', isShow ? 'show' : 'hide']">
              <p class="text-gray-500 my-4">February 2024 - Present</p>
              <h3 class="text-lg font-medium text-primary">Freelancer Front-end Developer</h3>
              <p class="text-gray-500 my-4">
                I'm embarking on within a team of two members, we build an e-commercial website
                majoring in logistics with wonderful features.
              </p>
            </div>

            <div :class="['experience-card', isShow ? 'show' : 'hide']">
              <p class="text-gray-500 my-4">January 2024 - Present</p>
              <h3 class="text-lg font-medium text-primary">Front-end Developer</h3>
              <p class="text-gray-500 my-4">
                I'm embarking on within a team of two members, we build an short-video platform
                using Blockchain technology.
              </p>
            </div>

            <div :class="['experience-card', isShow ? 'show' : 'hide']">
              <p class="text-gray-500 my-4">May 2023 - July 2023</p>
              <h3 class="text-lg text-primary">Intern Front-end Developer</h3>
              <p class="text-gray-500 my-4">
                I participated in a team of 4-5 members, learning new technologies utilized in
                Front-end development and also enhanced self-advancements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  @apply w-full bg-primary/10;
}
.wrapper {
  @apply max-w-7xl mx-auto py-20 px-4 md:px-0;
}
.experience-title {
  @apply text-2xl md:text-4xl font-bold text-center mb-6;
}
.experience-content {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0;
}
.experience-education {
  @apply pl-8 md:px-8 border-l-2 flex flex-col gap-6;
}
.experience-card {
  @apply bg-white shadow-xl rounded-lg px-8 py-4 border relative h-72 lg:h-56;
  transition:
    transform 1s ease-in-out,
    opacity 1.5s ease-in-out;

  &::after {
    @apply bg-primary;
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateX(-100%);
    height: 2px;
    width: 28px;
  }

  &::before {
    @apply bg-primary;
    content: '';
    position: absolute;
    left: 0;
    top: 46%;
    width: 20px;
    height: 20px;
    transform: translateX(-220%);
    border-radius: 50%;
  }
}
.hide {
  opacity: 0;
  transform: translateY(100%);
}
.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
