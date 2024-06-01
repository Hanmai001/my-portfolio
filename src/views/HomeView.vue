<script setup>
import AboutSection from '@/components/home/AboutSection.vue'
import IntroduceSection from '../components/home/IntroduceSection.vue'
import ExperienceSection from '../components/home/ExperienceSection.vue'
import ProjectSection from '../components/home/ProjectSection.vue'
import QualificationSection from '../components/home/QualificationSection.vue'
import AppWrapper from '../components/app/AppWrapper.vue'
</script>

<template>
  <main>
    <IntroduceSection />
    <AppWrapper>
      <AboutSection />
      <QualificationSection />
    </AppWrapper>
    <ExperienceSection />
    <AppWrapper>
      <ProjectSection />
    </AppWrapper>
  </main>
</template>
