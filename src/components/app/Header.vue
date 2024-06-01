<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const isSticky = ref(false)
const activeSection = ref('')
const showMobileNav = ref(false)

const route = useRoute()
const currentPath = computed(() => route.path)

const toggleMobileNav = () => {
  showMobileNav.value = !showMobileNav.value
}

const handleScroll = () => {
  if (window.scrollY > 50) {
    isSticky.value = true
  } else {
    isSticky.value = false
  }

  if (window.scrollY <= 100) {
    activeSection.value = ''
  } else {
    const sections = document.querySelectorAll('section')
    let foundSection = false
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section.id
        foundSection = true
      }
    })
    if (!foundSection) {
      activeSection.value = ''
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['header', { sticky: isSticky }]">
    <div class="header-wrapper">
      <div class="header-name">HELEN MAI</div>
      <nav class="header-nav">
        <RouterLink to="/" :class="{ 'text-primary': currentPath === '/' && activeSection === '' }"
          >Home</RouterLink
        >
        <RouterLink
          to="/#about"
          :class="{ 'text-primary': currentPath === '/' && activeSection === 'about' }"
          >About</RouterLink
        >
        <RouterLink
          to="/#experience"
          :class="{ 'text-primary': currentPath === '/' && activeSection === 'experience' }"
          >Experience</RouterLink
        >
        <RouterLink
          to="/#projects"
          :class="{ 'text-primary': currentPath === '/' && activeSection === 'projects' }"
          >Projects</RouterLink
        >
      </nav>

      <!-- Navbar for mobile -->
      <nav class="mobile-nav">
        <button @click="toggleMobileNav" class="mobile-nav-toggle">
          <i class="fas fa-bars"></i>
        </button>
        <div :class="['mobile-nav-menu', showMobileNav ? 'show' : 'hide']">
          <RouterLink
            to="/"
            :class="{ 'text-primary': currentPath === '/' && activeSection === '' }"
            >Home</RouterLink
          >
          <RouterLink
            to="/#about"
            :class="{ 'text-primary': currentPath === '/' && activeSection === 'about' }"
            >About</RouterLink
          >
          <RouterLink
            to="/#experience"
            :class="{ 'text-primary': currentPath === '/' && activeSection === 'experience' }"
            >Experience</RouterLink
          >
          <RouterLink
            to="/#projects"
            :class="{ 'text-primary': currentPath === '/' && activeSection === 'projects' }"
            >Projects</RouterLink
          >
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  @apply w-full fixed top-0 transition-all duration-300 py-6 z-50;
}
.header-wrapper {
  @apply max-w-7xl mx-auto flex justify-between px-4 md:px-0;
}
.header-nav {
  @apply hidden md:block text-center flex items-center;
}
.header-nav a {
  @apply font-medium inline-block px-2 md:px-4;
  border-left: 1px solid var(--color-border);
}
.header-nav a:first-of-type {
  border: 0;
}
.header-name {
  @apply text-xl font-medium flex items-center;
}
.sticky {
  @apply py-4 shadow-md bg-white;
}

.mobile-nav {
  display: none;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    display: flex;
    align-items: center;
  }

  .mobile-nav-toggle {
    background-color: transparent;
    border: none;
    padding: 0.5rem;
    cursor: pointer;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .mobile-nav-menu {
    @apply flex flex-col absolute left-0 w-full bg-white px-6 z-10;
    transition: transform 0.3s ease-in-out;
    top: 100%;
    height: 100vh;
    transform: translateX(100%);

    a {
      @apply w-full text-end border-b text-2xl py-6;
    }
  }
  .hide {
    transform: translateX(100%);
  }
  .show {
    transform: translateX(0);
  }
}
</style>
