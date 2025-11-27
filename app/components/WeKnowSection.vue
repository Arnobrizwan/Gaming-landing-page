<template>
  <section class="relative w-full py-[248px] px-8 lg:px-[120px] bg-gradient-to-b from-dark-bg to-[#1B1B1D]">
    <!-- Decorative glow -->
    <div class="absolute right-[218px] top-1/2 translate-y-[190px] w-[508px] h-[271px] bg-gold blur-[138px] opacity-30 pointer-events-none"></div>
    
    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col gap-[88px]">
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center gap-6">
        <h2 class="hero-heading text-[48px] leading-[67px] normal-case">We Know How it feels</h2>
        <div class="divider-ornament">
          <div class="h-[14px] flex-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
          <div class="divider-diamond"></div>
          <div class="h-[14px] flex-1 bg-gradient-to-l from-transparent via-gold-accent to-transparent"></div>
        </div>
      </div>
      
      <!-- Content Grid -->
      <div class="flex flex-col lg:flex-row items-start gap-20">
        <!-- Left: Text Content -->
        <div class="flex flex-col gap-10 w-full lg:w-[704px] text-white/80">
          <div class="flex flex-col gap-6">
            <p class="font-signika font-semibold text-2xl text-gold leading-8">
              It's Tuesday night. Your game is Thursday. And you still need to:
            </p>
            <div class="flex flex-col gap-4">
              <div v-for="item in todoItems" :key="item" class="flex items-start gap-4">
                <div class="w-5 h-5 rotate-45 bg-gold"></div>
                <p class="font-signika font-light text-2xl leading-8 text-white/80">{{ item }}</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <p class="font-signika font-semibold text-2xl text-gold leading-8">
              So you stay up until 2am. Again.
            </p>
            <p class="font-signika font-light text-2xl leading-8 text-white/80">
              And then your players spend 45 minutes interrogating the innkeeper you made up on the spot.
            </p>
            <p class="font-signika font-semibold text-2xl text-gold leading-8">
              Sound familiar?
            </p>
          </div>
        </div>
        
        <!-- Right: Image Card -->
        <div class="relative w-full lg:w-[704px] h-[566px] rounded-[12px] border border-white/10 overflow-hidden bg-dark-card">
          <img 
            src="/Images/Group 11 1.png" 
            alt="DM burnout" 
            class="absolute inset-0 w-full h-full object-cover"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-[#0F1012] via-transparent to-transparent"></div>

          <!-- Top Badge -->
          <div class="absolute top-6 left-6 px-4 py-2 bg-white/10 border border-white/10 backdrop-blur-[22px] rounded-lg text-white">
            <span class="font-signika font-light text-lg">over-stimulation + DM guilt.</span>
          </div>

          <!-- Bottom overlay -->
          <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0F1012] via-[#0F1012]/60 to-transparent">
            <div class="flex items-center justify-between mb-3">
              <p class="font-signika font-semibold text-lg text-white">Prep fatigue</p>
              <span class="font-signika font-light text-sm text-white/70">92%</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: 92%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const todoItems = [
  "Flesh out that villain's master plan",
  "Create the five NPCs your players will definitely interrogate",
  "Draw (or find) a decent battle map",
  "Write descriptions for the haunted mansion",
  "Stat out custom monsters because the book versions are boring"
]
</script>
