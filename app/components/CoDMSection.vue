<template>
  <section class="relative w-full py-[100px] px-[50px] lg:px-[100px] overflow-hidden bg-[#0B0C0E]">
    
    <div 
      class="absolute inset-0 z-0"
      style="
        background-image: url('/Images/Frame 209.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    ></div>

    <div class="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>

    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col gap-20">
      
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
          Think of Us as Your Co-DM
        </h2>

        <div class="flex items-center justify-center gap-2 w-full max-w-[600px] mt-1 opacity-90">
          <img src="/Images/Vector 3.png" alt="Left" class="flex-1 h-auto max-h-[10px] object-contain object-right" />
          <img src="/Images/Rectangle 125.png" alt="Diamond" class="h-[22px] w-auto object-contain" />
          <img src="/Images/Vector 4.png" alt="Right" class="flex-1 h-auto max-h-[10px] object-contain object-left" />
        </div>

        <p class="font-signika font-light text-[20px] leading-[30px] text-white/60 text-center mt-6 max-w-2xl">
          The one who handles the tedious stuff, so you can focus on telling unforgettable stories.
        </p>
      </div>
      
      <div class="flex flex-col lg:flex-row items-center justify-center gap-16 w-full">
        
        <div class="relative w-full max-w-[706px] h-[493px] bg-[#0F1012] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          
          <img 
            src="/Images/ChatGPT Image Nov 24, 2025, 01_23_00 AM 1.png" 
            alt="Before - Notebook Prep" 
            class="absolute left-0 top-0 w-[50%] h-full object-cover"
          />
          
          <img 
            src="/Images/Group 11 1 (1).png" 
            alt="After - Digital Tool" 
            class="absolute right-0 top-0 w-[50%] h-full object-cover"
          />
          
          <div class="absolute left-1/2 top-0 bottom-0 w-[4px] bg-[#0F1012] -ml-[2px] z-20"></div>
          
          <div class="absolute bottom-[20px] left-[20px] px-6 py-2 bg-white rounded-lg z-30 shadow-md">
            <span class="font-signika font-bold text-[16px] text-black">Before</span>
          </div>
          
          <div class="absolute bottom-[20px] right-[20px] px-6 py-2 bg-white rounded-lg z-30 shadow-md">
            <span class="font-signika font-bold text-[16px] text-black">After</span>
          </div>
        </div>
        
        <div class="flex flex-col gap-10 w-full max-w-[600px]">
          <div class="flex flex-col gap-6 text-white/80">
            <p class="font-signika font-light text-[22px] leading-[36px]">
              You bring the creativity and vision.
            </p>
            <p class="font-signika font-light text-[22px] leading-[36px]">
              We bring the tools that make your ideas real in minutes instead of hours.
            </p>
            <p class="font-signika font-light text-[22px] leading-[36px]">
              Stat blocks, descriptions, art, world-building details, handled.
            </p>
            <p class="font-signika font-light text-[22px] leading-[36px]">
              So you can focus on what actually matters:<br>
              telling a great story with your friends.
            </p>
          </div>
          
          <div class="flex items-center gap-3 px-6 py-4 bg-[#5CD691]/10 border border-[#5CD691]/20 rounded-full w-fit">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="#5CD691"/>
              <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#0F1012" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="font-signika font-medium text-[18px] text-[#5CD691] tracking-wide">
              We're here to protect the craft of tabletop storytelling
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script logic needed
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600;700&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
</style>