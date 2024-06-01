<script setup>
import { ref, onMounted } from 'vue'

const showText = ref(false)

onMounted(() => {
  showText.value = true
})
</script>

<template>
  <section class="home-introduce-section">
    <div class="introduce-wrapper">
      <Transition name="fade-up">
        <div v-if="showText" class="introduce-text">
          <h2 class="text-primary text-xl">Hello, My name is</h2>
          <h1 class="text-2xl md:text-6xl font-bold my-2">Mai Tran Gia Han</h1>
          <h3 class="text-xl md:text-2xl mb-4">I’m A Front-end Developer</h3>
          <p class="text-gray-600 mb-20 md:mb-8">
            I thrive in collaborative environments and enjoy working with designers and other
            developers to bring creative ideas to our life.
          </p>
        </div>
      </Transition>
      <div class="introduce-image">
        <img src="/images/home/introduce.jpg" alt="Hello" class="shadow-lg rounded-full" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-introduce-section {
  @apply w-full overflow-hidden relative bg-primary/10;

  &::after {
    content: '';
    width: 100%;
    height: 250px;
    background-image: url(/images/home/home-shape.png);
    background-position: bottom;
    background-size: cover;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 5;
  }
}

.introduce-wrapper {
  @apply mx-auto mt-20 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6;
}

.introduce-text {
  @apply text-center md:text-left;
}

.introduce-image {
  @apply flex justify-center items-center hidden md:block;
  max-width: 500px;
}

.fade-up-enter-active, .fade-up-leave-active {
  transition: all 1s ease-in-out;
}
.fade-up-enter-from, .fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-up-enter-to, .fade-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .home-introduce-section::after {
    height: 100px;
  }
}
</style>