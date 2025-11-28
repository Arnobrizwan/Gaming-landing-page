<template>
  <section class="relative w-full py-[100px] px-[50px] lg:px-[100px] overflow-hidden bg-[#0B0C0E]">
    
    <div 
      class="absolute inset-0 z-0"
      style="
        background-image: url('/Images/Frame 208 (1).png');
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
          Here's How It Works
        </h2>

        <div class="flex items-center justify-center gap-2 w-full max-w-[600px] mt-1 opacity-90">
          <img src="/Images/Vector 3.png" alt="Left" class="flex-1 h-auto max-h-[10px] object-contain object-right" />
          <img src="/Images/Rectangle 125.png" alt="Diamond" class="h-[22px] w-auto object-contain" />
          <img src="/Images/Vector 4.png" alt="Right" class="flex-1 h-auto max-h-[10px] object-contain object-left" />
        </div>

        <p class="font-signika font-light text-[20px] leading-[30px] text-white/60 text-center mt-6">
          Three simple steps to better campaigns.
        </p>
      </div>
      
      <div class="flex flex-col lg:flex-row items-start gap-10 w-full">
        
        <div class="flex flex-col gap-8 w-full lg:w-[320px] flex-shrink-0 sticky top-10">
          <div class="flex flex-col gap-5">
            <div v-for="(step, index) in steps" :key="index" 
                 class="flex items-center gap-3 cursor-pointer group">
              <div class="w-3 h-3 rotate-45 border border-white group-hover:bg-[#CBA66A] group-hover:border-[#CBA66A] transition-colors duration-300"
                   :class="index === 0 ? 'bg-white' : 'bg-transparent'"></div>
              
              <span class="font-signika font-bold text-[15px] uppercase tracking-wider transition-colors duration-300"
                    :class="index === 0 ? 'text-white' : 'text-white/40 group-hover:text-white/80'">
                {{ step.menuTitle }}
              </span>
            </div>
          </div>

          <div class="flex flex-col gap-3 mt-6">
            <button 
              class="w-full py-2.5 text-black font-signika font-bold text-[15px] rounded-md hover:scale-105 transition-transform shadow-lg"
              style="
                background: url('/Images/Texture 7.png'), #CBA66A; 
                background-blend-mode: multiply;
              ">
              Start Your First Session Free
            </button>
            <button class="w-full py-2.5 bg-white/5 text-white border border-white/20 font-signika font-semibold text-[15px] rounded-md hover:bg-white/10 transition-colors">
              Watch a 2-Min Demo
            </button>
          </div>

          <div class="flex items-center gap-2 mt-2 opacity-80">
            <div class="flex text-[#CBA66A] text-lg">★★★★★</div>
            <span class="text-white/60 text-sm font-signika">Trusted by 25,000+ DMs</span>
          </div>
        </div>

        <div class="flex-1 flex flex-col w-full">
          
          <div class="flex flex-col lg:flex-row gap-4 py-6 border-t border-white/10">
            <div class="flex-1 flex flex-col gap-2 pt-1">
              <h3 class="font-signika font-bold text-[24px] text-white">Tell Us What You Need</h3>
              <p class="font-signika font-light text-[18px] text-white/70 leading-relaxed">
                Describe your NPC, dungeon, villain, or quest in plain language.
                <br><br>
                No complex prompts. Just talk like you would to another DM.
              </p>
            </div>
            <div class="w-full lg:w-[420px] h-[260px] rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img src="/Images/a0e61c77-f970-415a-92fe-a4283be425ea 2 (1).png" class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" alt="Step 1" />
            </div>
          </div>

          <div class="flex flex-col lg:flex-row gap-4 py-6 border-t border-white/10">
            <div class="flex-1 flex flex-col gap-2 pt-1">
              <h3 class="font-signika font-bold text-[24px] text-white">Get Campaign-Ready Content</h3>
              <p class="font-signika font-light text-[18px] text-white/70 leading-relaxed">
                Instantly receive rich descriptions, stunning AI art, and printable materials.
                <br><br>
                Everything tailored to your campaign’s existing lore.
              </p>
            </div>
            <div class="w-full lg:w-[420px] h-[260px] rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img src="/Images/d495f967-782a-4e7b-b6b6-11c396e56c51 2 (1).png" class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" alt="Step 2" />
            </div>
          </div>

          <div class="flex flex-col lg:flex-row gap-4 py-6 border-t border-white/10">
            <div class="flex-1 flex flex-col gap-2 pt-1">
              <h3 class="font-signika font-bold text-[24px] text-white">Prep in Minutes</h3>
              <p class="font-signika font-light text-[18px] text-white/70 leading-relaxed">
                Download, customize, and use immediately.
                <br><br>
                Spend less time scrambling, more time enjoying game night.
              </p>
            </div>
            <div class="w-full lg:w-[420px] h-[260px] rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img src="/Images/1353643 2 (1).png" class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" alt="Step 3" />
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  { menuTitle: 'TELL US WHAT YOU NEED' },
  { menuTitle: 'GET CAMPAIGN-READY CONTENT' },
  { menuTitle: 'PREP IN MINUTES' }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
</style>