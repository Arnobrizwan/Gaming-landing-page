<template>
  <section class="relative w-full py-[120px] px-8 lg:px-[120px] bg-dark-bg">
    <!-- Background image placeholder -->
    <div class="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none"></div>
    
    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col gap-16">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4">
        <div class="flex flex-col items-center">
          <h2 class="font-vollkorn font-semibold text-4xl md:text-5xl text-center text-white">
            Imagine This Instead
          </h2>
          <SectionDivider />
        </div>
        <p class="font-signika font-light text-2xl text-white/60 text-center">
          It's Thursday morning. Game night is in 8 hours.
        </p>
      </div>
      
      <!-- Content Grid -->
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        <!-- Left: Laptop Mockup Placeholder -->
        <div class="w-full lg:w-[600px] h-[450px] bg-dark-card border border-white/10 rounded-lg">
          <!-- Laptop mockup placeholder -->
        </div>
        
        <!-- Right: Text Content -->
        <div class="flex-1 flex flex-col gap-8">
          <p class="font-signika font-semibold text-2xl text-gold leading-8">
            You're not stressed. You're excited. You open MythWeaver and spend 30 minutes:
          </p>
          
          <div class="flex flex-col gap-3">
            <div v-for="item in activities" :key="item" class="flex items-start gap-4">
              <div class="bullet-gold mt-1.5"></div>
              <p class="font-signika font-light text-xl text-white/80 leading-8">{{ item }}</p>
            </div>
          </div>
          
          <p class="font-signika font-semibold text-2xl italic text-white">
            Your prep is done. It's not even noon yet.
          </p>
          
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            That evening, when your players go off-script (because of course they do), you're not scrambling. You're improvising with confidence because MythWeaver can generate whatever you need in seconds.
          </p>
          
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            Your players are engaged. They're asking questions about your world's details. They're planning next session before this one even ends.
          </p>
          
          <p class="font-signika font-semibold text-2xl text-gold">
            This is the DM you wanted to be.
          </p>
          
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            And you're doing it without sacrificing your weekends or burning out.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activities = [
  "Generating the villain your players will meet tonight",
  "Creating three NPCs with personality and depth",
  "Designing a unique magic item as loot",
  "Getting stunning art for all of it"
]
</script>
