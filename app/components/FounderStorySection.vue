<template>
  <section class="relative w-full bg-[#0B0C0E] py-[100px] px-[50px] lg:px-[100px] overflow-hidden">
    
    <div class="absolute left-[10%] top-[20%] w-[400px] h-[400px] bg-[#CBA66A] blur-[300px] opacity-10 pointer-events-none"></div>

    <div class="relative z-10 max-w-[1400px] mx-auto flex flex-col gap-[60px]">
      
      <div class="flex flex-col items-center gap-0">
        
        <h2 
          class="font-vollkorn font-semibold text-[40px] md:text-[48px] leading-[1.2] text-center tracking-wide"
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
          Hey, We've Been Those DMs Too
        </h2>

        <div class="flex items-center justify-center gap-2 w-full max-w-[600px] mt-1 opacity-90">
          
          <img 
            src="/Images/Vector 3.png" 
            alt="Left" 
            class="flex-1 h-auto max-h-[10px] object-contain object-right" 
          />
          
          <img 
            src="/Images/Rectangle 125.png" 
            alt="Diamond" 
            class="h-[22px] w-auto object-contain" 
          />
          
          <img 
            src="/Images/Vector 4.png" 
            alt="Right" 
            class="flex-1 h-auto max-h-[10px] object-contain object-left" 
          />
          
        </div>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        <div class="relative w-full aspect-video bg-[#0F1012] border border-white/10 rounded-lg flex flex-col items-center justify-center shadow-2xl group cursor-pointer hover:border-[#CBA66A]/30 transition-colors duration-300">
          <div class="w-[80px] h-[80px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-[#CBA66A] group-hover:text-black transition-all duration-300">
            <svg class="w-8 h-8 text-white group-hover:text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <p class="font-signika font-semibold text-[20px] text-white/30 uppercase tracking-widest">
            Founder story video
          </p>
        </div>
        
        <div class="flex flex-col gap-10 pt-4">
          
          <p class="font-signika font-semibold text-[24px] leading-[34px] text-[#CBA66A]">
            The canceled sessions. The rushed prep. The burnout. We know the story.
          </p>
          
          <div class="flex flex-col gap-6">
            <div v-for="(item, index) in storyItems" :key="index" class="flex items-start gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="flex-shrink-0 mt-1">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#CBA66A"/>
              </svg>
              <p 
                class="font-signika font-light text-[20px] leading-[30px] text-[#E0E0E0]" 
                v-html="item">
              </p>
            </div>
          </div>
          
          <div class="flex flex-col gap-6">
            <p class="font-signika font-semibold text-[22px] leading-[32px] text-[#CBA66A]">
              We were those DMs too. That's exactly why we built MythWeaver.
            </p>
            <p class="font-signika font-bold text-[22px] leading-[34px] text-white">
              We're not just another AI company. We're DMs, Players, and TTRPG nerds who spent years figuring out how to run great campaigns without sacrificing our weekends.
            </p>
          </div>
          
          <div class="flex flex-col gap-8 mt-4">
            <div class="flex items-center gap-3">
              <div class="flex items-center -space-x-3">
                <div v-for="i in 4" :key="i" class="w-10 h-10 rounded-full bg-gray-600 border-2 border-[#0B0C0E]"></div>
              </div>
              <span class="font-signika font-light text-[16px] text-white/60 ml-2">Trusted by 26,000+ DMs</span>
            </div>
            <div>
              <button 
                class="px-8 py-4 text-black font-signika text-[18px] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                style="
                  background: url('/Images/Texture 7.png'), #CBA66A; 
                  background-blend-mode: multiply;
                  box-shadow: 0 0 20px rgba(203, 166, 106, 0.4), 0 4px 10px rgba(0,0,0,0.5);
                ">
                Start Your First Session Free
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const storyItems = [
  'The panic-cancel messages:<br>“Sorry everyone, I didn’t have time to prep.”',
  "The campaigns that fizzled out after six sessions because life got busy.",
  "The love for TTRPGs that never matched the time it took to run them."
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600;700&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
</style>