<template>
  <section class="relative w-full py-[100px] px-[50px] lg:px-[100px] overflow-hidden bg-[#0B0C0E]">
    
    <div 
      class="absolute inset-0 z-0"
      style="
        background-image: url('/Images/Frame 217.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    ></div>

    <div class="absolute inset-0 bg-black/30 pointer-events-none z-0"></div>

    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col gap-16">
      
      <div class="flex flex-col lg:flex-row justify-between items-start gap-10 w-full">
        
        <h2 
          class="font-vollkorn font-bold text-[48px] leading-[1.2] tracking-wide max-w-[500px] flex-shrink-0"
          style="
            background: linear-gradient(to bottom, #C5A059 0%, #E6C88B 45%, #96753A 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            filter: drop-shadow(0px 3px 0px rgba(0,0,0,0.6));
            font-variant: small-caps;
          "
        >
          Start Free, Upgrade When You're Ready
        </h2>
        
        <div class="flex flex-col items-end gap-6">
          
          <div class="flex flex-row items-center gap-8">
            <span class="font-signika font-bold text-[70px] text-white leading-none tracking-tighter">$0.00</span>
            
            <div class="flex flex-col text-left pt-2">
              <p class="font-signika font-light text-[18px] leading-[24px] text-white/60 whitespace-nowrap">
                Jump in and start <br>
                creating - totally free <br>
                for starters.
              </p>
            </div>
          </div>

          <div class="flex gap-4 justify-end w-full">
            <button 
              class="px-8 py-3 text-black font-signika font-bold text-[16px] rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              style="background: url('/Images/Texture 7.png'), #CBA66A; background-blend-mode: multiply;">
              Start For Free
            </button>
            <button class="px-8 py-3 bg-white/5 border border-white/20 rounded-lg font-signika font-bold text-[16px] text-white hover:bg-white/10 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
        
        <div class="flex flex-col justify-between p-10 bg-[#121212] border border-white/10 rounded-xl shadow-2xl">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2 text-[#CBA66A] text-xl">
                ✨ <span class="text-white font-signika font-bold">Free Tier</span>
              </div>
              <span class="font-signika font-bold text-[56px] text-white leading-none">$0<span class="text-[20px] font-light text-white/60">/yr</span></span>
            </div>
            <div class="flex flex-col gap-5">
              <div v-for="feature in freeTierFeatures" :key="feature" class="flex items-center gap-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="flex-shrink-0">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="white"/>
                </svg>
                <span class="font-signika font-light text-[18px] text-white/80">{{ feature }}</span>
              </div>
            </div>
          </div>
          <button class="mt-10 w-full py-4 bg-[#1F1F1F] border border-white/20 rounded-lg font-signika font-bold text-[18px] text-white hover:bg-white/10 transition">
            Start For Free
          </button>
        </div>
        
        <div 
          class="relative flex flex-col justify-between p-10 rounded-xl border-2 overflow-visible"
          style="
            background-color: #151414;
            background-image: url('/Images/Rectangle 49.jpg'); 
            background-blend-mode: overlay; 
            background-size: cover; 
            border-color: #CBA66A;
          "
        >
          <div class="absolute -top-5 left-8 px-5 py-2 bg-[#2A2825] border border-[#CBA66A] rounded-full flex items-center gap-2 shadow-lg z-20">
            <svg class="w-4 h-4 text-[#CBA66A]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <span class="font-signika font-bold text-[14px] text-[#CBA66A] uppercase tracking-wider">Most popular</span>
          </div>
          
          <div class="flex flex-col gap-8 mt-2">
            <div class="flex flex-col gap-2">
              <div class="flex items-center gap-2 text-[#CBA66A] text-xl">
                🔮 <span class="text-white font-signika font-bold">Basic Tier</span>
              </div>
              <span class="font-signika font-bold text-[56px] text-white leading-none">$9<span class="text-[20px] font-light text-white/60">/month</span></span>
            </div>
            <div class="flex flex-col gap-5">
              <div v-for="feature in basicTierFeatures" :key="feature" class="flex items-center gap-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="flex-shrink-0">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#CBA66A"/>
                </svg>
                <span class="font-signika font-light text-[18px] text-white/90">{{ feature }}</span>
              </div>
            </div>
          </div>
          <button class="mt-10 w-full py-4 bg-white rounded-lg font-signika font-bold text-[18px] text-black hover:bg-gray-200 transition shadow-lg">
            Get started
          </button>
        </div>
        
      </div>
      
      <div class="flex flex-col lg:flex-row items-center justify-center gap-8 mt-4 opacity-60">
        <span class="font-signika font-light text-[18px] text-white flex items-center gap-2">
          <span class="text-[24px] leading-none">•</span> No credit card required
        </span>
        <span class="font-signika font-light text-[18px] text-white flex items-center gap-2">
          <span class="text-[24px] leading-none">•</span> Cancel anytime
        </span>
        <span class="font-signika font-light text-[18px] text-white flex items-center gap-2">
          <span class="text-[24px] leading-none">•</span> Keep your content forever
        </span>
      </div>
      
    </div>
  </section>
</template>

<script setup>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600;700&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
</style>