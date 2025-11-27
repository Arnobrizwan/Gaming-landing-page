<template>
  <section class="relative w-full py-20 px-8 lg:px-[120px] bg-[#101113]">
    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col gap-16">
      <!-- Header Row -->
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <h2 class="font-vollkorn font-semibold text-4xl md:text-5xl text-white leading-[67px]">
          Start Free, Upgrade<br>When You're Ready
        </h2>
        
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-5">
            <span class="font-signika font-semibold text-6xl md:text-[80px] text-white">$0.00</span>
            <p class="font-signika font-light text-xl text-white/60 max-w-[199px] leading-6">
              Jump in and start creating - totally free for starters.
            </p>
          </div>
          <div class="flex gap-4">
            <button class="flex-1 px-6 py-3 bg-gold rounded-lg font-figtree font-semibold text-base text-black hover:brightness-95 transition">
              Start For Free
            </button>
            <button class="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg font-figtree font-semibold text-base text-white hover:bg-white/20 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      
      <!-- Pricing Cards -->
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Free Tier -->
        <div class="flex-1 flex flex-col justify-between p-8 lg:p-10 bg-[#151414] border border-white/20 rounded-lg">
          <div class="flex flex-col gap-10">
            <div class="flex flex-col gap-2">
              <span class="font-signika font-normal text-2xl text-white">✨ Free Tier</span>
              <span class="font-signika font-semibold text-5xl md:text-[64px] text-white">$0<span class="text-2xl">/yr</span></span>
            </div>
            
            <div class="flex flex-col gap-5">
              <div v-for="feature in freeTierFeatures" :key="feature" class="flex items-center gap-4">
                <div class="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center">
                  <span class="text-black text-xs">✓</span>
                </div>
                <span class="font-signika font-normal text-xl text-white/80">{{ feature }}</span>
              </div>
            </div>
          </div>
          
          <button class="mt-10 w-full px-6 py-3 bg-white/10 border border-white/30 rounded-lg font-signika font-semibold text-base text-white hover:bg-white/20 transition">
            Start For Free
          </button>
        </div>
        
        <!-- Basic Tier -->
        <div class="relative flex-1 flex flex-col justify-between p-8 lg:p-10 bg-[#171616] border border-gold/30 rounded-lg">
          <!-- Popular Badge -->
          <div class="absolute -top-5 left-8 px-5 py-2 bg-[#38352F] border border-gold-dark rounded-full flex items-center gap-2">
            <span class="text-gold">⚡</span>
            <span class="font-signika font-normal text-xl text-gold">Most popular</span>
          </div>
          
          <div class="flex flex-col gap-10 mt-4">
            <div class="flex flex-col gap-2">
              <span class="font-signika font-normal text-2xl text-white">🔮 Basic Tier</span>
              <span class="font-signika font-semibold text-5xl md:text-[64px] text-white">$9<span class="text-2xl">/month</span></span>
            </div>
            
            <div class="flex flex-col gap-5">
              <div v-for="feature in basicTierFeatures" :key="feature" class="flex items-center gap-4">
                <div class="w-5 h-5 rounded-full bg-gold flex items-center justify-center">
                  <span class="text-black text-xs">✓</span>
                </div>
                <span class="font-signika font-normal text-xl text-white">{{ feature }}</span>
              </div>
            </div>
          </div>
          
          <button class="mt-10 w-full px-6 py-3 bg-white rounded-lg font-signika font-semibold text-base text-black hover:bg-white/90 transition">
            Get started
          </button>
        </div>
      </div>
      
      <!-- Footer Notes -->
      <div class="flex flex-wrap justify-center gap-6">
        <span class="font-signika font-light text-xl text-white/60 tracking-wide">No credit card required</span>
        <span class="font-signika font-light text-xl text-white/60 tracking-wide">Cancel anytime</span>
        <span class="font-signika font-light text-xl text-white/60 tracking-wide">Keep your content forever</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const freeTierFeatures = [
  '50 AI generations per month',
  'Basic features',
  'No credit card required'
]

const basicTierFeatures = [
  'Unlimited generations',
  '3D models',
  'Priority support',
  'Advanced features'
]
</script>
