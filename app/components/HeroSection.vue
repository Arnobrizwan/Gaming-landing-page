<template>
  <section class="relative w-full min-h-screen lg:h-[1150px] bg-[#0B0C0E] overflow-hidden flex flex-col">
    
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
      class="absolute bottom-0 left-0 right-0 h-[300px] md:h-[500px] pointer-events-none z-10"
      style="background: linear-gradient(0deg, #0B0C0E 0%, rgba(11, 12, 14, 0) 100%);">
    </div>

    <header class="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-5 md:px-[100px] h-[80px] md:h-[97px] w-full">
      
      <div class="flex items-center gap-12">
        <img src="/Images/Valdris copy (1) 1.png" class="h-[22px] md:h-[25px] w-auto opacity-90" alt="Logo" />
        
        <nav class="hidden md:flex items-center gap-6">
          <a class="text-white/80 font-signika text-[15px] hover:text-white transition cursor-pointer">Blog</a>
          <a class="text-white/80 font-signika text-[15px] hover:text-white transition cursor-pointer">Tiers & Treasures</a>
        </nav>
      </div>

      <div class="flex items-center gap-2 md:gap-3">
        <button class="px-3 md:px-4 py-[6px] border border-white/30 bg-white/5 text-white font-signika text-[13px] md:text-[14px] rounded-lg hover:bg-white/10 transition whitespace-nowrap">
          Log in
        </button>
        <button 
          class="px-4 md:px-6 py-[6px] text-black font-signika text-[13px] md:text-[14px] rounded-lg transition-all hover:scale-105 whitespace-nowrap"
          style="
            background: url('/Images/Texture 7.png'), #CBA66A; 
            background-blend-mode: multiply;
            box-shadow: 0 4px 10px rgba(0,0,0,0.5);
          ">
          Start for free
        </button>
      </div>
    </header>

    <div class="relative z-40 flex flex-col justify-start px-6 md:px-[100px] pt-[120px] md:pt-[180px] h-full">
      
      <div class="flex flex-col gap-4 md:gap-6 w-full">
        <h1
          class="font-vollkorn font-bold text-[40px] leading-[1.1] md:text-[64px] w-full max-w-[1250px] tracking-wide text-center md:text-left"
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
          Run Legendary Campaigns<br class="hidden md:block"/>
          Without the Burnout
        </h1>
        
        <p class="text-[18px] md:text-[20px] leading-[26px] md:leading-[28px] font-signika font-light max-w-[800px] text-[#DDDDDD] text-center md:text-left"
           style="text-shadow: 0px 1px 2px rgba(0,0,0,0.8);">
          Cut your prep time from hours to minutes with AI built specifically for tabletop RPGs.
        </p>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-start md:items-start mt-[40px] md:mt-[100px] lg:mt-[150px] gap-8 md:gap-0">
        
        <div class="flex flex-col items-center md:items-start gap-[14px] w-full md:w-auto">
          <button
            class="w-full md:w-auto px-8 py-3 text-black font-signika text-[19px] leading-[23px] rounded-lg transition-all duration-300 hover:scale-105"
            style="
              background: url('/Images/Texture 7.png'), #CBA66A; 
              background-blend-mode: multiply;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
            ">
            Start Creating Free
          </button>
          <p class="text-white/80 text-[13px] font-figtree tracking-wide pl-1 text-center md:text-left">
            No credit card required • Join 26,000+ DMs
          </p>
        </div>
        
        <div class="flex flex-col items-center md:items-start gap-[14px] w-full md:w-auto">
          <button class="w-full md:w-auto px-8 py-3 text-white font-signika text-[19px] rounded-lg border border-white/20 bg-black/40 hover:bg-white/10 transition shadow-lg backdrop-blur-sm">
            Watch How It Works
          </button>
          <p class="text-white/80 text-[13px] font-figtree tracking-wide pl-1 text-center md:text-left">
            Used by 26,000+ DMs
          </p>
        </div>
      </div>

      <div class="flex gap-5 mt-[50px] md:mt-[80px] pb-12 overflow-x-auto md:overflow-visible no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
        <div class="flex-shrink-0 w-[160px] h-[160px] md:w-[220px] md:h-[220px] rounded-lg bg-gray-900 shadow-2xl overflow-hidden border border-white/10">
          <img src="/Images/Frame 84.png" class="w-full h-full object-cover" />
        </div>
        <div class="flex-shrink-0 w-[160px] h-[160px] md:w-[220px] md:h-[220px] rounded-lg bg-gray-900 shadow-2xl overflow-hidden border border-white/10">
          <img src="/Images/Frame 85.png" class="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition duration-300" />
        </div>
        <div class="flex-shrink-0 w-[160px] h-[160px] md:w-[220px] md:h-[220px] rounded-lg bg-gray-900 shadow-2xl overflow-hidden border border-white/10">
          <img src="/Images/Frame 86.png" class="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition duration-300" />
        </div>
        <div class="flex-shrink-0 w-[160px] h-[160px] md:w-[220px] md:h-[220px] rounded-lg bg-gray-900 shadow-2xl overflow-hidden border border-white/10">
          <img src="/Images/Frame 87.png" class="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition duration-300" />
        </div>
        <div class="flex-shrink-0 w-[160px] h-[160px] md:w-[220px] md:h-[220px] rounded-lg bg-gray-900 shadow-2xl overflow-hidden border border-white/10">
          <img src="/Images/Frame 88.png" class="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition duration-300" />
        </div>
      </div>

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

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>