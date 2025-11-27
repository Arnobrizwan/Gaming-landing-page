<template>
  <section class="relative w-full py-[120px] px-8 lg:px-[120px] bg-[#101113]">
    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col items-center gap-[88px]">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4">
        <div class="flex flex-col items-center">
          <h2 class="font-vollkorn font-semibold text-4xl md:text-5xl text-center text-white">
            What Makes Us Different
          </h2>
          <SectionDivider />
        </div>
        <p class="font-signika font-light text-2xl text-white/60 text-center">
          Every image you generate pays royalties to the artists who made it possible.
        </p>
      </div>
      
      <!-- Stats Badge -->
      <div class="flex items-center gap-2 px-6 py-2 bg-black/20 border border-white/10 rounded-full">
        <div class="w-[46px] h-[47px] rounded-full bg-gold/20 flex items-center justify-center">
          <span class="text-2xl">💰</span>
        </div>
        <span class="font-figtree font-bold text-2xl text-white">$2,700 paid out so far</span>
      </div>
      
      <!-- Quote -->
      <p class="max-w-[912px] font-signika font-semibold text-2xl md:text-[32px] leading-[48px] text-center text-white/80">
        "No exploitation. No guilt. Just beautiful art that supports the creative community we all love."
      </p>
      
      <!-- Artist Cards -->
      <div class="flex flex-wrap justify-center gap-6">
        <div v-for="artist in artists" :key="artist.name" 
             class="w-[278px] h-[432px] bg-dark-bg border border-white/10 rounded-lg shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col justify-between pt-6 overflow-hidden">
          <div class="px-6 flex flex-col gap-2">
            <h3 class="font-signika font-semibold text-xl leading-[25px] text-white">{{ artist.name }}</h3>
            <p class="font-signika font-light text-base leading-6 text-white/80">{{ artist.themes }}</p>
          </div>
          <div class="w-full h-[278px]">
            <img :src="artist.image" :alt="artist.name" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const artists = [
  { name: 'Freya Haze Marquardt', themes: 'Themes: Lucid dreaming, landscapes, creatures, and monsters', image: '/Images/Rectangle 50.png' },
  { name: 'Tamás Patkós', themes: 'Themes: Drow, Aasimar, Fire Genasi, Female full-body', image: '/Images/Rectangle 50 (1).png' },
  { name: 'B Ceasar Vitorino', themes: 'Themes: Dragonborn, Tieflings, Halflings, Painted-style', image: '/Images/Rectangle 50 (3).png' },
  { name: 'Aicel Escalada', themes: 'Themes: Coming soon...', image: '/Images/Rectangle 50 (4).png' },
  { name: 'Lancel Lopez', themes: 'Themes: Coming soon...', image: '/Images/Rectangle 50 (5).png' }
]
</script>
