<template>
  <section class="relative w-full py-[120px] px-8 lg:px-[120px] bg-gradient-to-b from-dark-bg to-[#1F1F1F]">
    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col items-center gap-16">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4">
        <div class="flex flex-col items-center">
          <h2 class="font-vollkorn font-semibold text-4xl md:text-5xl text-center text-white">
            Think of Us as Your Co-DM
          </h2>
          <SectionDivider />
        </div>
        <p class="font-signika font-light text-2xl text-white/60 text-center">
          The one who handles the tedious stuff, so you can focus on telling unforgettable stories.
        </p>
      </div>
      
      <!-- Before/After Comparison -->
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Before/After Image Placeholder -->
        <div class="relative w-full lg:w-[480px] h-[400px] bg-dark-card border border-white/10 rounded-lg overflow-hidden">
          <div class="absolute bottom-4 left-4 px-3 py-1 bg-white rounded text-black text-sm font-medium">Before</div>
          <div class="absolute bottom-4 right-4 px-3 py-1 bg-white rounded text-black text-sm font-medium">After</div>
        </div>
        
        <!-- Text Content -->
        <div class="flex-1 flex flex-col gap-8">
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            You bring the creativity and vision.
          </p>
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            We bring the tools that make your ideas real in minutes instead of hours.
          </p>
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            Stat blocks, descriptions, art, world-building details, handled.
          </p>
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            So you can focus on what actually matters:<br>
            <span class="font-semibold">telling a great story with your friends.</span>
          </p>
          
          <!-- Badge -->
          <div class="flex items-center gap-2 px-4 py-2 border border-success/30 rounded-lg w-fit">
            <span class="text-success">✓</span>
            <span class="font-signika text-success">We're here to protect the craft of tabletop storytelling</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
