<template>
  <section class="qualification-section" id="qualification">
    <div class="section-header">
      <h2 class="section-title">Qualifications</h2>
      <p class="section-subtitle">My skills and <span class="text-primary">expertise</span></p>
    </div>

    <div class="qualification-columns">
      <div
        :class="['qualification-row', isShow ? 'show' : 'hide']"
        v-for="(column, index) in qualifications"
        :key="index"
      >
        <div class="column-header">
          <span class="column-number">{{ index + 1 }}</span>
        </div>

        <div class="qualification-list">
          <h3 class="column-title">{{ column.title }}</h3>
          <ul>
            <li v-for="(item, idx) in column.items" :key="idx" class="qualification-item">
              <div class="item-content">
                <h4 class="item-title">{{ item.name }}</h4>
                <p class="item-description">{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const isShow = ref(false)

onMounted(() => {
  const handleScroll = () => {
    if (window.scrollY >= 1200) {
      isShow.value = true
    }
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
})

const qualifications = ref([
  {
    title: 'Front-end',
    items: [
      {
        name: 'HTML, CSS (SCSS), Javascript, Typescript, Ajax, Jquery'
      },
      {
        name: 'ReactJS, NextJS, Vue 3',
        description:
          'Experienced with using ReactJS, NextJS, and Vue 3 to develop dynamic user interfaces'
      },
      {
        name: 'MantineJS, Bootstrap 5, TailwindCSS, Material UI, Flowbite',
        description:
          'Familiar with various UI libraries and frameworks for efficient and responsive web design'
      },
      {
        name: 'UX/UI',
        description:
          'Understanding of user experience (UX) and user interface (UI) design principles'
      }
    ]
  },
  {
    title: 'Back-end',
    items: [
      {
        name: 'NodeJS/ExpressJS',
        description:
          'Proficient in using NodeJS and ExpressJS for building scalable and efficient server-side applications'
      },
      {
        name: 'MySQL',
        description:
          'Experienced with utilizing MySQL for database management and integration with backend systems'
      }
    ]
  },
  {
    title: 'Blockchain',
    items: [
      {
        name: 'Solidity',
        description:
          'Experienced with utilizing Solidity to write smart contracts with various features'
      },
      {
        name: 'Etherjs, Web3js',
        description: 'Experienced with utilizing Etherjs, Web3js to interact with Blockchain'
      },
      {
        name: 'Truffle, Hardhat',
        description:
          'Experienced with utilizing Truffle, Hardhat to write contracts and deploy to chains'
      }
    ]
  },
  {
    title: 'Tools',
    items: [
      {
        name: 'Git',
        description:
          'Experienced with version control using Git for efficient collaboration and code management.'
      },
      {
        name: 'Figma',
        description: 'Proficient in using Figma for creating and collaborating on UI/UX designs.'
      },
      {
        name: 'Trello, Jira,...',
        description:
          'Familiar with project management tools such as Trello and Jira for organizing and tracking project tasks.'
      }
    ]
  }
])
</script>

<style scoped>
.qualification-section {
  @apply mt-6;
  padding: 2rem 1rem;
}

.section-header {
  @apply text-center mb-2;
}

.section-title {
  @apply text-gray-600;
}

.section-subtitle {
  @apply text-2xl md:text-4xl font-medium text-center mb-6;
}

.qualification-columns {
  @apply grid grid-cols-1 md:grid-cols-4 gap-4;
}

.qualification-row {
  @apply flex flex-row items-start;
  transition:
    transform 1s ease-in-out,
    opacity 1.5s ease-in-out;
}

.column-header {
  @apply pr-6 w-8;
}

.column-number {
  @apply text-2xl font-bold text-primary/80;
}

.column-title {
  @apply text-2xl font-medium text-primary/80 mb-2;
}

.qualification-list {
  @apply border-l-2 pl-6;
}

.qualification-item {
  @apply flex items-center mb-2;
}

.item-content {
  text-align: left;
}

.item-title {
  @apply font-bold;
}

.item-description {
  @apply text-gray-600 text-sm;
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
