<template>
  <section class="relative w-full min-h-screen lg:h-[1117px] overflow-hidden bg-[#0F1012]">
    <!-- Background Image - Rectangle 49 -->
    <div 
      class="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat brightness-[0.45]"
      style="background-image: url('/Images/Rectangle 49.jpg');"
    ></div>
    
    <!-- Dark overlay to match Figma tone -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0a0b0d]/80 via-[#0f1012]/60 to-[#0f1012]/40 pointer-events-none"></div>
    
    <!-- Rectangle 58 - Bottom gradient -->
    <div 
      class="absolute left-0 right-0 h-[40%] bottom-[10%] pointer-events-none"
      style="background: linear-gradient(360deg, #0F1012 0%, rgba(15, 16, 18, 0) 100%);"
    ></div>
    
    <!-- Rectangle 57 - Bottom gradient -->
    <div 
      class="absolute left-0 right-0 h-[35%] bottom-0 pointer-events-none"
      style="background: linear-gradient(360deg, #0F1012 0%, rgba(15, 16, 18, 0) 100%);"
    ></div>
    
    <!-- Frame 18 - Header -->
    <header class="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-6 lg:px-[120px] py-4 h-[80px] lg:h-[116px]">
      <!-- Frame 17 - Logo & Nav -->
      <div class="flex items-center gap-14">
        <!-- Logo -->
        <a href="#" class="block">
          <img src="/Images/Valdris copy (1) 1.png" alt="MythWeaver" class="w-[127px] h-[30px] object-contain" />
        </a>
        <!-- Frame 14 - Nav Links -->
        <div class="flex items-center gap-2">
          <a href="#" class="flex items-center justify-center px-4 py-2 font-signika font-normal text-base leading-5 tracking-[0.02em] text-white/80 hover:text-white transition-colors">
            Blog
          </a>
          <a href="#" class="flex items-center justify-center px-4 py-2 font-signika font-normal text-base leading-5 tracking-[0.02em] text-white/80 hover:text-white transition-colors">
            Tiers & Treasures
          </a>
        </div>
      </div>
      <!-- Frame 16 - Auth Buttons -->
      <div class="flex items-center gap-2">
        <!-- Frame 13 - Log in -->
        <button class="flex items-center justify-center px-4 py-2 w-[75px] h-[36px] bg-white/10 border border-white/30 rounded-lg font-signika font-normal text-base leading-5 tracking-[0.02em] text-white hover:bg-white/20 transition-colors">
          Log in
        </button>
        <!-- Frame 15 - Start for free -->
        <button 
          class="flex items-center justify-center px-4 py-2 w-[125px] h-[36px] rounded-lg font-signika font-normal text-base leading-5 tracking-[0.02em] text-black hover:brightness-95 transition"
          style="background: url('/Images/Rectangle 55.png'), #B9975F; background-blend-mode: multiply, normal;"
        >
          Start for free
        </button>
      </div>
    </header>
    
    <!-- Frame 1 - Hero Text -->
    <div class="absolute flex flex-col items-center gap-4 w-[calc(100%-48px)] lg:w-[1471px] left-6 lg:left-[120px] top-[120px] lg:top-[189px]">
      <!-- Heading -->
      <h1 
        class="w-full font-vollkorn font-bold text-[40px] lg:text-[64px] leading-[1.4] lg:leading-[89px] text-gold"
        style="text-shadow: 0px 8px 11px rgba(0, 0, 0, 0.3);"
      >
        Run Legendary Campaigns<br />Without the Burnout
      </h1>
      <!-- Subtext -->
      <p class="w-full font-signika font-light text-lg lg:text-2xl leading-[26px] lg:leading-[30px] text-white/80">
        Cut your prep time from hours to minutes with AI built specifically for tabletop RPGs.
      </p>
    </div>
    
    <!-- Frame 57 - CTA Buttons Row -->
    <div class="absolute flex justify-between items-center w-[calc(100%-48px)] lg:w-[1488px] left-6 lg:left-[120px] bottom-[35%] lg:top-[786px] lg:bottom-auto">
      <!-- Frame 55 - Primary CTA -->
      <div class="flex flex-col items-start gap-[23px] w-[328px]">
        <!-- Frame 255 - Button wrapper -->
        <div class="flex flex-col items-start pb-2 gap-2 w-[259px] rounded-lg" style="background: #715932;">
          <!-- Frame 4 - Button -->
          <button 
            class="flex items-center justify-center w-[259px] h-[60px] rounded-lg font-signika font-normal text-[23px] leading-7 tracking-[0.02em] text-black"
            style="background: url('/Images/Rectangle 55.png'), #B9975F; background-blend-mode: multiply, normal;"
          >
            Start Creating Free
          </button>
        </div>
        <!-- Helper text -->
        <p class="font-figtree font-normal text-base leading-[19px] tracking-[0.02em] text-white">
          No credit card required • Join 26,000+ DMs
        </p>
      </div>
      
      <!-- Frame 56 - Secondary CTA -->
      <div class="flex flex-col items-start gap-[23px] w-[277px]">
        <!-- Frame 256 - Button wrapper -->
        <div class="flex flex-col items-start pb-2 gap-2 w-[277px]">
          <!-- Frame 5 - Button -->
          <button class="flex items-center justify-center w-[277px] h-[62px] bg-white/10 border border-white/30 rounded-lg font-signika font-normal text-2xl leading-[30px] tracking-[0.02em] text-white hover:bg-white/20 transition">
            Watch How It Works
          </button>
        </div>
        <!-- Helper text -->
        <p class="w-full font-figtree font-normal text-base leading-[19px] tracking-[0.02em] text-white">
          Used by 26,000+ DMs
        </p>
      </div>
    </div>
    
    <!-- Frame 136 - Character Cards -->
    <div class="absolute flex items-center gap-4 lg:gap-6 w-[calc(100%-48px)] lg:w-[1488px] left-6 lg:left-[120px] bottom-0 lg:top-[978px] lg:bottom-auto overflow-x-auto pb-4">
      <!-- Frame 84 - Card 1 (Color) -->
      <div class="relative flex-shrink-0 w-[180px] lg:w-[278px] h-[180px] lg:h-[278px] bg-white/[0.08] border border-white/10 rounded-lg overflow-hidden">
        <img src="/Images/Frame 84.png" alt="Character" class="absolute inset-0 w-full h-full object-cover" />
      </div>
      <!-- Frame 85 - Card 2 (Grayscale) -->
      <div class="relative flex-shrink-0 w-[180px] lg:w-[279px] h-[180px] lg:h-[278px] bg-white/[0.08] border border-white/10 rounded-lg overflow-hidden">
        <img src="/Images/Frame 85.png" alt="Character" class="absolute inset-0 w-full h-full object-cover grayscale" />
      </div>
      <!-- Frame 86 - Card 3 (Grayscale) -->
      <div class="relative flex-shrink-0 w-[180px] lg:w-[279px] h-[180px] lg:h-[278px] bg-white/[0.08] border border-white/10 rounded-lg overflow-hidden">
        <img src="/Images/Frame 86.png" alt="Character" class="absolute inset-0 w-full h-full object-cover grayscale" />
      </div>
      <!-- Frame 87 - Card 4 (Grayscale) -->
      <div class="relative flex-shrink-0 w-[180px] lg:w-[278px] h-[180px] lg:h-[278px] bg-white/[0.08] border border-white/10 rounded-lg overflow-hidden">
        <img src="/Images/Frame 87.png" alt="Character" class="absolute inset-0 w-full h-full object-cover grayscale" />
      </div>
      <!-- Frame 88 - Card 5 (Grayscale) -->
      <div class="relative flex-shrink-0 w-[180px] lg:w-[278px] h-[180px] lg:h-[278px] bg-white/[0.08] border border-white/10 rounded-lg overflow-hidden">
        <img src="/Images/Frame 88.png" alt="Character" class="absolute inset-0 w-full h-full object-cover grayscale" />
      </div>
    </div>
  </section>
</template>
