<template>
  <section class="relative w-full pt-0 pb-[100px] px-[50px] lg:px-[100px] overflow-hidden bg-[#0B0C0E]">
    
    <div 
      class="absolute inset-0 z-0"
      style="
        background-image: url('/Images/Frame 218.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    ></div>

    <div class="absolute inset-0 bg-black/30 pointer-events-none z-0"></div>

    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col gap-20 mt-24">
      
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
          The Choice Is Yours
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
      
      <div class="flex flex-col lg:flex-row gap-10 items-stretch w-full h-auto lg:h-[530px]">
        
        <div class="relative flex-1 rounded-xl overflow-hidden group border border-white/10">
          <img 
            src="/Images/keep-struggling.png" 
            alt="Keep struggling" 
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div 
            class="absolute inset-0 z-10 pointer-events-none"
            style="background: linear-gradient(180deg, rgba(16, 17, 19, 0.00) 0%, #101113 100%);"
          ></div>
          
          <div class="relative z-20 h-full flex flex-col justify-end p-10 gap-5">
            <h3 class="font-signika font-bold text-[26px] leading-[32px] text-white uppercase tracking-wider">
              Keep struggling:
            </h3>
            <p class="font-signika font-light text-[20px] leading-[30px] text-white/80">
              Burnout. Cancelled sessions. Rushed prep. Another campaign dying because prep feels like a second job.
            </p>
          </div>
        </div>
        
        <div class="relative flex-1 rounded-xl overflow-hidden group border-2 border-[#CBA66A]">
          <img 
            src="/Images/Group 16 1.png" 
            alt="Start Building" 
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <img 
            src="/Images/Valdris copy (1) 1.png" 
            alt="MythWeaver" 
            class="absolute top-10 left-10 w-[127px] h-auto object-contain z-20"
          />

          <div 
            class="absolute inset-0 z-10 pointer-events-none"
            style="background: linear-gradient(180deg, rgba(16, 17, 19, 0.00) 0%, #101113 100%);"
          ></div>
          
          <div class="relative z-20 h-full flex flex-col justify-end p-10 gap-5">
            <h3 class="font-signika font-bold text-[26px] leading-[32px] text-white uppercase tracking-wider">
              Or start building:
            </h3>
            <p class="font-signika font-light text-[20px] leading-[30px] text-white/80">
              Legendary campaigns. Engaged players. Game nights you actually look forward to.
            </p>
          </div>
        </div>
        
      </div>
      
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600;700&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
</style>