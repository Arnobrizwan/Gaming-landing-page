<template>
  <section class="relative w-full py-[100px] px-[50px] lg:px-[100px] overflow-hidden bg-[#0B0C0E]">
    
    <div 
      class="absolute inset-0 z-0"
      style="
        background-image: url('/Images/Group 14 1.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    ></div>

    <div class="absolute inset-0 bg-black/40 pointer-events-none z-0"></div>

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
          Here's What Happens If Nothing Changes
        </h2>

        <div class="flex items-center justify-center gap-2 w-full max-w-[600px] mt-1 opacity-90">
          <img src="/Images/Vector 3.png" alt="Left" class="flex-1 h-auto max-h-[10px] object-contain object-right" />
          <img src="/Images/Rectangle 125.png" alt="Diamond" class="h-[22px] w-auto object-contain" />
          <img src="/Images/Vector 4.png" alt="Right" class="flex-1 h-auto max-h-[10px] object-contain object-left" />
        </div>

        <p class="font-signika font-light text-[20px] leading-[30px] text-white/60 text-center mt-6">
          You already know this story. You've lived it.
        </p>
      </div>
      
      <div class="flex flex-col lg:flex-row items-start gap-20 w-full pl-0 lg:pl-20">
        
        <div class="flex-1 flex flex-col gap-10">
          
          <div class="flex flex-col gap-5">
            <h3 class="font-signika font-bold text-[24px] leading-[32px] text-[#CBA66A]">
              Without better tools:
            </h3>
            
            <div class="flex flex-col gap-4">
              <div v-for="(item, index) in consequences" :key="index" class="flex items-start gap-4">
                
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="flex-shrink-0 mt-1.5">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#DD3B3B"/>
                </svg>
                
                <p class="font-signika font-light text-[18px] leading-[28px] text-[#E0E0E0]">
                  {{ item }}
                </p>
              </div>
            </div>
          </div>
          
          <div class="flex flex-col gap-3">
            <h3 class="font-signika font-bold text-[24px] leading-[32px] text-[#CBA66A]">
              The real tragedy?
            </h3>
            <p class="font-signika font-light text-[18px] leading-[28px] text-[#E0E0E0]">
              It's not that you lack creativity or skill. You're just exhausted.<br>
              And great campaigns don't die from bad ideas. They die from DM burnout.
            </p>
          </div>
          
          <h3 class="font-signika font-bold text-[24px] leading-[32px] text-[#CBA66A]">
            There's a better way.
          </h3>
          
        </div>

        <div class="flex-1 hidden lg:block"></div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
const consequences = [
  "Another campaign dies around session 8 because you got overwhelmed",
  'You cancel "just this one session" that turns into three canceled sessions',
  "Players lose interest because your world lacks the depth you promised",
  "You feel guilty every time you use AI art that exploits artists",
  "You're juggling six different tools that don't talk to each other",
  "Your passion for DMing slowly turns into dread"
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600;700&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
</style>