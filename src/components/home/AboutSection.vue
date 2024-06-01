<script setup>
import { ref, onMounted } from 'vue'

const showText = ref(false)
onMounted(() => {
  const handleScroll = () => {
    if (window.innerWidth <= 768) showText.value = true
    else if (window.scrollY >= 300) {
      showText.value = true
    }
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>
<template>
  <section class="about-section" id="about">
    <div class="about-wrapper">
      <Transition name="fade-up">
        <div v-if="showText" class="about-image">
          <img src="/images/home/avatar-me.jpg" alt="About Me" />
        </div>
      </Transition>

      <Transition name="fade-up">
        <div v-if="showText" class="about-content">
          <h3 class="text-sm md:text-xl text-gray-500 uppercase text-center md:text-left">
            About Me
          </h3>

          <div class="about-icons">
            <a
              href="https://www.facebook.com/profile.php?id=100038694972797"
              target="_blank"
              class="icon"
            >
              <i class="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/h%C3%A2n-mai-864279228/"
              target="_blank"
              class="icon"
            >
              <i class="fab fa-linkedin-in text-2xl"></i>
            </a>
            <a href="https://github.com/Hanmai001" target="_blank" class="icon">
              <i class="fab fa-github text-2xl"></i>
            </a>
          </div>

          <h2 class="text-2xl md:text-4xl font-bold text-center md:text-left my-4 md:my-0">
            Innovating the Future with Cutting-Edge
            <span class="text-primary">Software Solutions</span>
          </h2>
          <p class="text-gray-600 text-center md:text-left mb-4 md:mb-0">
            As a Front-end Developer with a strong foundation in React/NextJS and blockchain
            technologies. Proven ability to develop user-friendly web applications and quickly adapt
            to emerging technologies and diverse environments. Passionate about contributing to
            innovative projects and continuously enhancing my skills within a collaborative team,
            aiming to advance into a leadership role in software engineering development and drive
            impactful projects that push the boundaries of web technology
          </p>
          <div class="about-box-info">
            <div>
              <h4 class="font-bold">Full Name :</h4>
              <p>Mai Tran Gia Han</p>
            </div>
            <div>
              <h4 class="font-bold">Phone No :</h4>
              <p>+84 938950630</p>
            </div>
            <div>
              <h4 class="font-bold">Age :</h4>
              <p>22 Years</p>
            </div>
            <div>
              <h4 class="font-bold">Email :</h4>
              <p>giahanmai3110@gmail.com</p>
            </div>
            <div class="col-span-2">
              <h4 class="font-bold">Address :</h4>
              <p>District 8, Ho Chi Minh City, Viet Nam</p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  @apply w-full;
}
.about-wrapper {
  @apply max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6;
}
.about-image img {
  @apply w-full h-auto rounded-lg shadow-lg overflow-hidden aspect-square;
}
.about-content {
  @apply flex flex-col justify-between;
}
.text-primary {
  @apply text-purple-600;
}
.about-box-info {
  @apply p-4 rounded-lg shadow-lg bg-white grid grid-cols-1 sm:grid-cols-2 gap-4;
}
.about-icons {
  @apply flex justify-center my-4 md:justify-start;

  .icon {
    @apply mr-4 text-gray-600 hover:text-primary border px-4 py-3 hover:border-primary rounded;
  }
}
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 1s ease-in-out;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-up-enter-to,
.fade-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
