<template>
  <section class="relative w-full py-[100px] px-[50px] lg:px-[100px] overflow-hidden bg-[#0B0C0E]">
    
    <div 
      class="absolute inset-0 z-0"
      style="
        background-image: url('/Images/Frame 211 1.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    ></div>

    <div class="absolute inset-0 bg-black/30 pointer-events-none z-0"></div>

    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col gap-16">
      
      <div class="flex flex-col items-center gap-0 w-full">
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
          Imagine This Instead
        </h2>

        <div class="flex items-center justify-center gap-2 w-full max-w-[600px] mt-1 opacity-90">
          <img src="/Images/Vector 3.png" alt="Left" class="flex-1 h-auto max-h-[10px] object-contain object-right" />
          <img src="/Images/Rectangle 125.png" alt="Diamond" class="h-[22px] w-auto object-contain" />
          <img src="/Images/Vector 4.png" alt="Right" class="flex-1 h-auto max-h-[10px] object-contain object-left" />
        </div>

        <p class="font-signika font-light text-[20px] leading-[30px] text-white/60 text-center mt-6">
          It's Thursday morning. Game night is in 8 hours.
        </p>
      </div>
      
      <div class="flex flex-col lg:flex-row items-start justify-center gap-16 w-full">
        
        <div class="flex-1 w-full h-[500px] hidden lg:block"></div>
        
        <div class="flex-1 flex flex-col gap-10 w-full max-w-[650px] mt-6">
          
          <div class="flex flex-col gap-6">
            <p class="font-signika font-bold text-[24px] leading-[34px] text-[#CBA66A]">
              You're not stressed. You're excited. You open MythWeaver and spend 30 minutes:
            </p>
            
            <div class="flex flex-col gap-4">
              <div v-for="(item, index) in activities" :key="index" class="flex items-start gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="flex-shrink-0 mt-1">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#5CD691"/>
                </svg>
                <p class="font-signika font-light text-[20px] leading-[30px] text-white/90">
                  {{ item }}
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-6">
            <p class="font-signika font-bold text-[24px] leading-[34px] text-[#CBA66A]">
              Your prep is done. It’s not even noon yet.
            </p>
            <p class="font-signika font-light text-[20px] leading-[30px] text-white/80">
              That evening, when your players go off-script (because of course they do), you're not scrambling. You're improvising with confidence because MythWeaver can generate whatever you need in seconds.
            </p>
            <p class="font-signika font-light text-[20px] leading-[30px] text-white/80">
              Your players are engaged. They're asking questions about your world's details. They're planning next session before this one even ends.
            </p>
          </div>

          <div class="flex flex-col gap-2">
            <p class="font-signika font-bold text-[24px] leading-[34px] text-[#CBA66A]">
              This is the DM you wanted to be.
            </p>
            <p class="font-signika font-light text-[20px] leading-[30px] text-white/80">
              And you're doing it without sacrificing your weekends or burning out.
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const activities = [
  "Generating the villain your players will meet tonight",
  "Creating three NPCs with personality and depth",
  "Designing a unique magic item as loot",
  "Getting stunning art for all of it"
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
</style>