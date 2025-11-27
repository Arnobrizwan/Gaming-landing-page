<template>
  <section class="relative w-full py-[120px] px-8 lg:px-[120px] bg-[#101113]">
    <!-- Background image placeholder -->
    <div class="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"></div>
    
    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col gap-16">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4">
        <div class="flex flex-col items-center">
          <h2 class="font-vollkorn font-semibold text-4xl md:text-5xl text-center text-white">
            Here's What Happens If Nothing Changes
          </h2>
          <SectionDivider />
        </div>
        <p class="font-signika font-light text-2xl text-white/60 text-center">
          You already know this story. You've lived it.
        </p>
      </div>
      
      <!-- Content -->
      <div class="flex flex-col gap-8 max-w-[800px]">
        <h3 class="font-signika font-semibold text-2xl text-white">Without better tools:</h3>
        
        <div class="flex flex-col gap-4">
          <div v-for="item in consequences" :key="item" class="flex items-start gap-4">
            <div class="bullet-gold mt-1.5"></div>
            <p class="font-signika font-light text-xl text-white/80 leading-8">{{ item }}</p>
          </div>
        </div>
        
        <div class="mt-8">
          <h3 class="font-signika font-semibold text-2xl text-gold mb-4">The real tragedy?</h3>
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            It's not that you lack creativity or skill. You're just exhausted.
          </p>
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            And great campaigns don't die from bad ideas. They die from DM burnout.
          </p>
        </div>
        
        <p class="font-signika font-semibold text-2xl text-gold mt-4">
          There's a better way.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const consequences = [
  "Another campaign dies around session 8 because you got overwhelmed",
  'You cancel "just this one session" that turns into three canceled sessions',
  "Players lose interest because your world lacks the depth you promised",
  "You feel guilty every time you use AI art that exploits artists",
  "You're juggling six different tools that don't talk to each other",
  "Your passion for DMing slowly turns into dread"
]
</script>
