<template>
  <section class="relative w-full h-screen overflow-hidden bg-[#0B0C0E] flex flex-col justify-between">
    
    <div 
      class="absolute inset-0 z-0"
      style="
        background-image: url('/Images/Frame 219.png');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      "
    ></div>

    <div class="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0C0E]/90 pointer-events-none z-0"></div>

    <div class="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center text-center pt-[100px] px-4">
      
      <h2 
        class="font-vollkorn font-bold text-[28px] md:text-[40px] leading-[1.1] tracking-wide uppercase mb-10"
        style="
          background: url('/Images/Texture 7.png'), linear-gradient(180deg, #F0D599 0%, #CBA66A 50%, #8C6B38 100%);
          background-blend-mode: overlay;
          background-size: cover;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.8));
        "
      >
        Start Your First Campaign Free
      </h2>
      
      <div class="flex flex-col items-center gap-5 mb-16">
        <div class="flex flex-col sm:flex-row gap-4">
          <button 
            class="px-5 py-2.5 text-black font-signika font-bold text-[14px] md:text-[15px] rounded-[4px] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(203,166,106,0.3)]"
            style="background: url('/Images/Texture 7.png'), #CBA66A; background-blend-mode: multiply; background-size: cover;">
            Start Creating Free
          </button>
          <button class="px-5 py-2.5 bg-white/5 border border-white/20 rounded-[4px] font-signika font-bold text-[14px] md:text-[15px] text-white hover:bg-white/10 transition backdrop-blur-md">
            Watch 2-Min Demo
          </button>
        </div>
        
        <div class="flex flex-wrap justify-center items-center gap-2 text-white/80">
          <span class="font-signika font-light text-[11px] md:text-[12px] drop-shadow-md">No credit card required</span>
          <span class="text-[10px] opacity-50 drop-shadow-md">•</span>
          <span class="font-signika font-light text-[11px] md:text-[12px] drop-shadow-md">26,000+ DMs already creating</span>
        </div>
      </div>

      <div class="flex flex-col items-center gap-2">
        <p class="font-signika font-normal text-[13px] md:text-[14px] leading-relaxed text-white/80 max-w-[650px] drop-shadow-md">
          What will you build first?<br/>
          <span class="text-white/60">An unforgettable villain? A mysterious dungeon? A bustling city with secrets?</span>
        </p>
        <p class="font-signika font-bold text-[14px] md:text-[15px] text-white mt-1 drop-shadow-lg">
          Your next legendary campaign starts here.
        </p>
      </div>
    
    </div>
      
    <div class="relative z-10 flex flex-col items-center w-full pb-[100px] px-4 mt-auto">
      
      <div class="flex flex-col items-center gap-2 mb-10">
        <img 
          src="/Images/Valdris%20copy%20(1)%201.png" 
          alt="MythWeaver Logo" 
          class="w-[180px] h-auto object-contain drop-shadow-xl" 
        />
        <p class="font-signika font-normal text-[14px] md:text-[16px] text-white/70 tracking-wide drop-shadow-md">The helpful D&D assistant.</p>
      </div>
      
      <div class="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-12 opacity-90">
        <div v-for="badge in badges" :key="badge" class="flex items-center gap-2">
          <div class="w-4 h-4 rounded-full bg-[#CBA66A] flex items-center justify-center shadow-lg">
              <svg width="7" height="6" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4L3.5 6.5L9 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
          <span class="font-signika font-bold text-[12px] md:text-[14px] text-white/90 whitespace-nowrap drop-shadow-md">{{ badge }}</span>
        </div>
      </div>
      
      <p class="font-signika font-light text-[11px] md:text-[12px] text-white/40">
        © 2025 MythWeaver. All rights reserved.
      </p>
      
    </div>

  </section>
</template>

<script setup>
const badges = [
  'No credit card required',
  '50 free AI generations to start',
  'Cancel anytime',
  'Artists paid fairly on every image',
  '26,000+ active DMs'
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600;700&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
</style>