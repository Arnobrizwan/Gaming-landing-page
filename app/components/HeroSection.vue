<template>
  <section class="relative w-full h-[1150px] bg-[#0B0C0E] overflow-hidden">
    
    <div
      class="absolute inset-0 bg-cover bg-center z-0"
      style="
        background-image: url('/Images/Frame 21 (1).png');
        background-position: center top;
        filter: brightness(0.85) contrast(1.1); 
      "
    ></div>

    <div 
      class="absolute inset-0 pointer-events-none z-0"
      style="
        background: radial-gradient(
          circle at 50% 40%, 
          rgba(0, 0, 0, 0) 20%, 
          rgba(0, 0, 0, 0.4) 60%, 
          #0B0C0E 100%
        );
      "
    ></div>

    <div 
      class="absolute bottom-0 left-0 right-0 h-[500px] pointer-events-none z-10"
      style="background: linear-gradient(0deg, #0B0C0E 0%, rgba(11, 12, 14, 0) 100%);">
    </div>

    <header class="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-[100px] h-[97px]">
      <div class="flex items-center gap-12">
        <img src="/Images/Valdris copy (1) 1.png" class="h-[25px] w-auto opacity-90" alt="Logo" />
        <nav class="flex items-center gap-6">
          <a class="text-white/80 font-signika text-[15px] hover:text-white transition cursor-pointer">Blog</a>
          <a class="text-white/80 font-signika text-[15px] hover:text-white transition cursor-pointer">Tiers & Treasures</a>
        </nav>
      </div>
      <div class="flex items-center gap-3">
        <button class="px-4 py-[6px] border border-white/30 bg-white/5 text-white font-signika text-[14px] rounded-lg hover:bg-white/10 transition">
          Log in
        </button>
        <button 
          class="px-6 py-[6px] text-black font-signika text-[14px] rounded-lg transition-all hover:scale-105"
          style="
            background: url('/Images/Texture 7.png'), #CBA66A; 
            background-blend-mode: multiply;
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
          ">
          Start for free
        </button>
      </div>
    </header>

    <div class="absolute top-[220px] left-[100px] right-[100px] z-40 flex flex-col gap-6">
      
      <h1
        class="font-vollkorn font-bold text-[64px] leading-[1.1] w-full max-w-[1250px] tracking-wide"
        style="
          background: url('/Images/Texture 7.png'), linear-gradient(180deg, #F0D599 0%, #CBA66A 50%, #8C6B38 100%);
          background-blend-mode: overlay; 
          background-size: cover;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          
          filter: drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.8));
          font-variant: small-caps;
        "
      >
        Run Legendary Campaigns<br />
        Without the Burnout
      </h1>
      
      <p class="text-[20px] leading-[28px] font-signika font-light max-w-[800px] text-[#DDDDDD]"
         style="text-shadow: 0px 1px 2px rgba(0,0,0,0.8);">
        Cut your prep time from hours to minutes with AI built specifically for tabletop RPGs.
      </p>
    </div>

    <div class="absolute top-[655px] left-[100px] right-[100px] z-40 flex justify-between items-start">
      
      <div class="flex flex-col items-start gap-[14px]">
        <button
          class="px-8 py-3 text-black font-signika text-[19px] leading-[23px] rounded-lg transition-all duration-300 hover:scale-105"
          style="
            background: url('/Images/Texture 7.png'), #CBA66A; 
            background-blend-mode: multiply;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
          ">
          Start Creating Free
        </button>
        <p class="text-white/80 text-[13px] font-figtree tracking-wide pl-1">
          No credit card required • Join 26,000+ DMs
        </p>
      </div>
      
      <div class="flex flex-col items-start gap-[14px]">
        <button class="px-8 py-3 text-white font-signika text-[19px] rounded-lg border border-white/20 bg-black/40 hover:bg-white/10 transition shadow-lg backdrop-blur-sm">
          Watch How It Works
        </button>
        <p class="text-white/80 text-[13px] font-figtree tracking-wide pl-1">
          Used by 26,000+ DMs
        </p>
      </div>

    </div>

    <div class="absolute top-[850px] left-[100px] z-40 flex gap-5">
      <div class="w-[220px] h-[220px] rounded-lg bg-gray-900 shadow-2xl overflow-hidden border border-white/10"><img src="/Images/Frame 84.png" class="w-full h-full object-cover" /></div>
      <div class="w-[220px] h-[220px] rounded-lg bg-gray-900 shadow-2xl overflow-hidden border border-white/10"><img src="/Images/Frame 85.png" class="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition duration-300" /></div>
      <div class="w-[220px] h-[220px] rounded-lg bg-gray-900 shadow-2xl overflow-hidden border border-white/10"><img src="/Images/Frame 86.png" class="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition duration-300" /></div>
      <div class="w-[220px] h-[220px] rounded-lg bg-gray-900 shadow-2xl overflow-hidden border border-white/10"><img src="/Images/Frame 87.png" class="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition duration-300" /></div>
      <div class="w-[220px] h-[220px] rounded-lg bg-gray-900 shadow-2xl overflow-hidden border border-white/10"><img src="/Images/Frame 88.png" class="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition duration-300" /></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;600&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
.font-figtree { font-family: 'Figtree', sans-serif; }
</style>