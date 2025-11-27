<template>
  <section class="relative w-full py-20 px-8 lg:px-[120px] bg-gradient-to-b from-dark-bg to-[#1F1F1F]">
    <!-- Background image placeholder -->
    <div class="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"></div>
    
    <div class="relative z-10 max-w-[1489px] mx-auto flex flex-col items-center gap-[240px]">
      <!-- Main CTA -->
      <div class="flex flex-col items-center gap-[88px]">
        <h2 class="font-vollkorn font-semibold text-5xl md:text-[64px] leading-[89px] text-center text-white">
          Start Your First Campaign Free
        </h2>
        
        <div class="flex flex-col items-center gap-[52px]">
          <!-- Buttons -->
          <div class="flex flex-col items-center gap-8">
            <div class="flex flex-wrap justify-center gap-4">
              <button class="px-8 py-4 bg-gold rounded-lg font-figtree font-semibold text-xl text-black hover:brightness-95 transition">
                Start Creating Free
              </button>
              <button class="px-8 py-4 bg-white/10 border border-white/30 rounded-lg font-figtree font-semibold text-xl text-white hover:bg-white/20 transition">
                Watch 2-Min Demo
              </button>
            </div>
            
            <div class="flex items-center gap-4">
              <span class="font-signika font-light text-xl text-white tracking-wide">No credit card required</span>
              <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span class="font-signika font-light text-xl text-white tracking-wide">26,000+ DMs already creating</span>
            </div>
          </div>
          
          <!-- Prompt Text -->
          <div class="flex flex-col items-center gap-6">
            <p class="font-signika font-light text-xl text-white/60 text-center leading-[30px]">
              What will you build first?<br>
              An unforgettable villain? A mysterious dungeon? A bustling city with secrets?
            </p>
            <p class="font-signika font-semibold text-xl text-white text-center">
              Your next legendary campaign starts here.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="flex flex-col items-center gap-16 w-full">
        <!-- Logo -->
        <div class="flex flex-col items-center gap-6">
          <span class="font-vollkorn font-bold text-3xl text-white">MythWeaver</span>
          <span class="font-signika font-light text-xl text-white tracking-wide">The helpful D&D assistant.</span>
        </div>
        
        <!-- Trust Badges -->
        <div class="flex flex-wrap justify-center gap-10">
          <div v-for="badge in badges" :key="badge" class="flex items-center gap-2">
            <div class="w-6 h-6 rounded-full bg-gold flex items-center justify-center">
              <span class="text-black text-sm">✓</span>
            </div>
            <span class="font-signika font-medium text-xl text-white tracking-wide">{{ badge }}</span>
          </div>
        </div>
        
        <!-- Copyright -->
        <p class="font-signika font-light text-base text-white/60 text-center tracking-wide">
          © 2025 MythWeaver. All rights reserved.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const badges = [
  'No credit card required',
  '50 free AI generations to start',
  'Cancel anytime',
  'Artists paid fairly on every image',
  '26,000+ active DMs'
]
</script>
