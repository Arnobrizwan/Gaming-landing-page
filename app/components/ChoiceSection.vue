<template>
  <section class="relative w-full py-20 px-8 lg:px-[120px] bg-dark-bg">
    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col gap-16">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4">
        <div class="flex flex-col items-center">
          <h2 class="font-vollkorn font-semibold text-4xl md:text-5xl text-center text-white">
            The Choice Is Yours
          </h2>
          <SectionDivider />
        </div>
        <p class="font-signika font-light text-2xl text-white/60 text-center">
          It's Thursday morning. Game night is in 8 hours.
        </p>
      </div>
      
      <!-- Choice Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Keep Struggling -->
        <div class="relative h-[530px] bg-dark-card border border-white/20 rounded-lg overflow-hidden">
          <!-- Background placeholder -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#101113] via-transparent to-transparent"></div>
          
          <div class="absolute bottom-10 left-10 right-10 flex flex-col gap-5">
            <h3 class="font-signika font-semibold text-[26px] text-white capitalize">Keep struggling:</h3>
            <p class="font-signika font-normal text-2xl text-white/80 leading-[38px]">
              Burnout. Cancelled sessions. Rushed prep. Another campaign dying because prep feels like a second job.
            </p>
          </div>
        </div>
        
        <!-- Or Start Building -->
        <div class="relative h-[530px] bg-dark-card border border-white/20 rounded-lg overflow-hidden">
          <!-- MythWeaver Logo placeholder -->
          <div class="absolute top-10 left-10">
            <span class="font-vollkorn font-bold text-xl text-white">MythWeaver</span>
          </div>
          
          <!-- Background placeholder -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#101113] via-transparent to-transparent"></div>
          
          <div class="absolute bottom-10 left-10 right-10 flex flex-col gap-5">
            <h3 class="font-signika font-semibold text-[26px] text-white capitalize">Or start building:</h3>
            <p class="font-signika font-normal text-2xl text-white/80 leading-[38px]">
              Legendary campaigns. Engaged players. Game nights you actually look forward to.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
