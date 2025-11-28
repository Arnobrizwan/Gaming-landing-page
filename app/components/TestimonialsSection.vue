<template>
  <section class="relative w-full py-[100px] px-[50px] lg:px-[100px] overflow-hidden bg-[#0B0C0E]">
    
    <div 
      class="absolute inset-0 z-0"
      style="
        background-image: url('/Images/Frame 213.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    ></div>

    <div class="absolute inset-0 bg-black/30 pointer-events-none z-0"></div>

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
          Don't Just Take Our Word for It
        </h2>

        <div class="flex items-center justify-center gap-2 w-full max-w-[600px] mt-1 opacity-90">
          <img src="/Images/Vector 3.png" alt="Left" class="flex-1 h-auto max-h-[10px] object-contain object-right" />
          <img src="/Images/Rectangle 125.png" alt="Diamond" class="h-[22px] w-auto object-contain" />
          <img src="/Images/Vector 4.png" alt="Right" class="flex-1 h-auto max-h-[10px] object-contain object-left" />
        </div>

        <p class="font-signika font-light text-[20px] leading-[30px] text-white/60 text-center mt-6">
          Here's what other game masters are saying.
        </p>
      </div>
      
      <div class="flex flex-col items-center gap-20 w-full">
        
        <div class="flex flex-col lg:flex-row gap-10 items-stretch w-full">
          
          <div class="flex-1 flex flex-col gap-6 p-4">
            <h3 class="font-signika font-bold text-[24px] leading-[32px] text-[#CBA66A]">
              "I've Finally Run a Full Campaign"
            </h3>
            <p class="font-signika font-light text-[18px] leading-[30px] text-white/80 flex-grow">
              "I've been trying for 5 years. They always died around session 8 because I got overwhelmed. With MythWeaver, I'm 30 sessions into my best campaign ever. My players don't know I prep in a fraction of the time I used to."
            </p>
            <div class="flex flex-col gap-1 mt-auto">
              <p class="font-signika font-bold text-[20px] text-white/90">Sarah M.</p>
              <p class="font-signika font-light text-[16px] text-white/70">DM for 5 years</p>
            </div>
          </div>
          
          <div class="flex-1 flex flex-col gap-6 p-4">
            <h3 class="font-signika font-bold text-[24px] leading-[32px] text-[#CBA66A]">
              "Saved My Campaign and Sanity"
            </h3>
            <p class="font-signika font-light text-[18px] leading-[30px] text-white/80 flex-grow">
              "Had a newborn, thought I'd have to quit DMing. MythWeaver let me keep going with 1/4 the prep time. Our Tuesday night group is still going strong."
            </p>
            <div class="flex flex-col gap-1 mt-auto">
              <p class="font-signika font-bold text-[20px] text-white/90">Marcus T.</p>
              <p class="font-signika font-light text-[16px] text-white/70">Father of two</p>
            </div>
          </div>
          
          <div class="flex-1 flex flex-col gap-6 p-4">
            <h3 class="font-signika font-bold text-[24px] leading-[32px] text-[#CBA66A]">
              "The Artist Royalties Matter"
            </h3>
            <p class="font-signika font-light text-[18px] leading-[30px] text-white/80 flex-grow">
              "I'm an illustrator, so using AI always felt wrong. Learning MythWeaver pays artists made me actually want to use it. Now I generate concepts here, then commission artists for hero pieces. Everybody wins."
            </p>
            <div class="flex flex-col gap-1 mt-auto">
              <p class="font-signika font-bold text-[20px] text-white/90">Jamie L.</p>
              <p class="font-signika font-light text-[16px] text-white/70">Professional Illustrator</p>
            </div>
          </div>
          
        </div>
        
        <div 
          class="flex flex-col lg:flex-row justify-between items-center gap-8 px-10 py-6 w-full rounded-xl border border-white/10"
          style="
            background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
            backdrop-filter: blur(10px);
          "
        >
          <div class="flex items-center gap-4">
            <img 
              src="/Images/ChatGPT Image Nov 25, 2025, 11_38_03 AM 1.png" 
              alt="Royalties Paid" 
              class="w-12 h-12 object-contain opacity-90" 
            />
            <span class="font-signika font-semibold text-[20px] text-white/90">
              $2,700 Royalties paid to artists so far
            </span>
          </div>
          
          <div class="flex items-center gap-4">
            <img 
              src="/Images/ChatGPT Image Nov 25, 2025, 11_40_27 AM 1.png" 
              alt="Active DMs" 
              class="w-12 h-12 object-contain opacity-90" 
            />
            <span class="font-signika font-semibold text-[20px] text-white/90">
              26,000+ Active DMs
            </span>
          </div>
          
          <div class="flex items-center gap-4">
            <img 
              src="/Images/ChatGPT Image Nov 25, 2025, 11_42_55 AM 1.png" 
              alt="Content Generated" 
              class="w-12 h-12 object-contain opacity-90" 
            />
            <span class="font-signika font-semibold text-[20px] text-white/90">
              1.4M+ Pieces of content generated
            </span>
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
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
</style>