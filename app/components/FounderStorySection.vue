<template>
  <section class="relative w-full py-[120px] px-8 lg:px-[120px]" style="background: linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), #0F1012;">
    <!-- Decorative glow -->
    <div class="absolute left-[181px] top-[298px] w-[342px] h-[183px] bg-gold blur-[138px] opacity-30 pointer-events-none"></div>
    
    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col gap-[88px]">
      <!-- Section Header -->
      <div class="flex flex-col items-center">
        <h2 class="font-vollkorn font-semibold text-4xl md:text-5xl text-center text-white">
          Hey, We've Been Those DMs Too
        </h2>
        <SectionDivider />
      </div>
      
      <!-- Content Grid -->
      <div class="flex flex-col lg:flex-row items-start gap-20">
        <!-- Left: Video Placeholder -->
        <div class="relative w-full lg:w-[704px] h-[468px] bg-dark-bg border border-white/[0.08] rounded-lg flex flex-col items-center justify-center">
          <p class="font-figtree font-semibold text-[32px] text-white/20 text-center capitalize mb-4">
            Founder story video
          </p>
          <!-- Play Button -->
          <div class="w-[88px] h-[88px] rounded-full bg-white/50 flex items-center justify-center cursor-pointer hover:bg-white/60 transition">
            <svg class="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        
        <!-- Right: Text Content -->
        <div class="flex flex-col items-start pt-8 gap-16 w-full lg:w-[704px]">
          <div class="flex flex-col gap-10">
            <!-- Intro -->
            <p class="font-signika font-semibold text-2xl text-gold leading-8">
              The canceled sessions. The rushed prep. The burnout. We know the story.
            </p>
            
            <!-- Bullet List -->
            <div class="flex flex-col gap-4">
              <div v-for="item in storyItems" :key="item" class="flex items-start gap-4">
                <div class="bullet-gold mt-1.5"></div>
                <p class="font-signika font-light text-2xl text-white/80 leading-8">{{ item }}</p>
              </div>
            </div>
            
            <!-- Conclusion -->
            <p class="font-signika font-semibold text-2xl text-gold leading-8">
              We were those DMs too. That's exactly why we built MythWeaver.
            </p>
            
            <p class="font-signika font-semibold text-2xl text-white/80 leading-8">
              We're not just another AI company. We're DMs, Players, and TTRPG nerds who spent years figuring out how to run great campaigns without sacrificing our weekends.
            </p>
          </div>
          
          <!-- Trust Indicators -->
          <div class="flex items-center gap-2">
            <div class="flex items-center -space-x-3">
              <div v-for="i in 4" :key="i" class="w-11 h-11 rounded-full bg-gray-400 border-4 border-dark-bg"></div>
            </div>
            <span class="font-signika font-light text-xl text-white/80 ml-2">Trusted by 26,000+ DMs</span>
          </div>
          
          <!-- CTA Button -->
          <div class="bg-gold-dark rounded-lg pb-2">
            <button class="flex items-center justify-center px-8 py-4 gap-2 bg-gold rounded-lg font-figtree font-semibold text-xl text-black tracking-wide hover:brightness-95 transition">
              Start Your First Session Free
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const storyItems = [
  'The panic-cancel messages: "Sorry everyone, I didn\'t have time to prep."',
  "The campaigns that fizzled out after six sessions because life got busy.",
  "The love for TTRPGs that never matched the time it took to run them."
]
</script>
