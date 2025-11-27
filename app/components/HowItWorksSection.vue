<template>
  <section class="relative w-full py-[120px] px-8 lg:px-[120px] bg-dark-bg">
    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col gap-[88px]">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4">
        <div class="flex flex-col items-center">
          <h2 class="font-vollkorn font-semibold text-4xl md:text-5xl text-center text-white">
            Here's How It Works
          </h2>
          <SectionDivider />
        </div>
        <p class="font-signika font-light text-2xl text-white/60 text-center">
          Three simple steps to better campaigns.
        </p>
      </div>
      
      <!-- Content Grid -->
      <div class="flex flex-col lg:flex-row gap-20">
        <!-- Left: Steps Navigation -->
        <div class="flex flex-col gap-6 w-full lg:w-[240px]">
          <button v-for="(step, index) in steps" :key="step.title"
                  @click="activeStep = index"
                  class="flex items-center gap-3 text-left transition-colors"
                  :class="activeStep === index ? 'text-white' : 'text-white/60'">
            <div class="bullet-gold" :class="activeStep === index ? 'opacity-100' : 'opacity-50'"></div>
            <span class="font-signika font-semibold text-sm uppercase tracking-wide">{{ step.title }}</span>
          </button>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col gap-4 mt-8">
            <div class="bg-gold-dark rounded-lg pb-2">
              <button class="w-full flex items-center justify-center px-6 py-3 bg-gold rounded-lg font-figtree font-semibold text-base text-black tracking-wide hover:brightness-95 transition">
                Start Your First Session Free
              </button>
            </div>
            <button class="w-full flex items-center justify-center px-6 py-3 bg-white/10 border border-white/30 rounded-lg font-figtree font-semibold text-base text-white tracking-wide hover:bg-white/20 transition">
              Watch a 2-Min Demo
            </button>
          </div>
          
          <!-- Trust -->
          <div class="flex items-center gap-1 mt-4">
            <div class="flex">
              <span v-for="i in 5" :key="i" class="text-gold text-sm">★</span>
            </div>
            <span class="font-signika font-light text-sm text-white/80 ml-2">Trusted By 26,000+ DMs</span>
          </div>
        </div>
        
        <!-- Right: Step Content -->
        <div class="flex-1 flex flex-col gap-12">
          <div v-for="step in steps" :key="step.title" class="flex flex-col lg:flex-row gap-12">
            <!-- Text -->
            <div class="flex-1">
              <h3 class="font-signika font-bold text-2xl text-white mb-4">{{ step.title }}</h3>
              <p class="font-signika font-light text-xl text-white/80 leading-8">{{ step.description }}</p>
              <p v-if="step.subtext" class="font-signika font-light text-xl text-white/80 leading-8 mt-2">{{ step.subtext }}</p>
            </div>
            <!-- Image Placeholder -->
            <div class="w-full lg:w-[400px] h-[280px] bg-dark-card border border-white/10 rounded-lg">
              <!-- Step image placeholder -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeStep = ref(0)

const steps = [
  {
    title: 'Tell Us What You Need',
    description: 'Describe your NPC, dungeon, villain, or quest in plain language.',
    subtext: 'No complex prompts. Just talk like you would to another DM.'
  },
  {
    title: 'Get Campaign-Ready Content',
    description: 'Instantly receive rich descriptions, stunning AI art, and printable materials.',
    subtext: "Everything tailored to your campaign's existing lore."
  },
  {
    title: 'Prep in Minutes',
    description: 'Download, customize, and use immediately.',
    subtext: 'Spend less time scrambling, more time enjoying game night.'
  }
]
</script>
