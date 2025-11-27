<template>
  <header class="absolute top-0 left-0 right-0 z-50 px-8 lg:px-[120px] py-4">
    <nav class="flex items-center justify-between">
      <!-- Logo & Nav Links -->
      <div class="flex items-center gap-14">
        <!-- Logo - Using image placeholder, replace with actual logo -->
        <a href="#" class="block">
          <img src="/Images/Valdris copy (1) 1.png" alt="MythWeaver" class="h-[30px] w-auto" />
        </a>
        
        <!-- Nav Links -->
        <div class="hidden md:flex items-center gap-2">
          <a href="#" class="px-4 py-2 text-white/80 hover:text-white font-signika text-base tracking-wide transition-colors">
            Blog
          </a>
          <a href="#" class="px-4 py-2 text-white/80 hover:text-white font-signika text-base tracking-wide transition-colors">
            Tiers & Treasures
          </a>
        </div>
      </div>
      
      <!-- Auth Buttons -->
      <div class="flex items-center gap-2">
        <button class="px-4 py-2 text-white font-signika text-base tracking-wide bg-white/10 border border-white/30 rounded-lg hover:bg-white/20 transition-colors">
          Log in
        </button>
        <button class="px-4 py-2 text-black font-signika text-base tracking-wide bg-gold rounded-lg hover:bg-gold/90 transition-colors">
          Start for free
        </button>
      </div>
    </nav>
  </header>
</template>
