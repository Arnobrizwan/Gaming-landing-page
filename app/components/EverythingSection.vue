<template>
  <section class="relative w-full py-[100px] px-[50px] lg:px-[100px] overflow-hidden bg-[#0B0C0E]">
    
    <div 
      class="absolute inset-0 z-0"
      style="
        background-image: url('/Images/Frame 210 (1).png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    ></div>

    <div class="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>

    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col gap-24">
      
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
          Everything You Need in One Place
        </h2>

        <div class="flex items-center justify-center gap-2 w-full max-w-[600px] mt-1 opacity-90">
          <img src="/Images/Vector 3.png" alt="Left" class="flex-1 h-auto max-h-[10px] object-contain object-right" />
          <img src="/Images/Rectangle 125.png" alt="Diamond" class="h-[22px] w-auto object-contain" />
          <img src="/Images/Vector 4.png" alt="Right" class="flex-1 h-auto max-h-[10px] object-contain object-left" />
        </div>

        <p class="font-signika font-light text-[20px] leading-[30px] text-white/60 text-center mt-6">
          Nine types of instant campaign content, all tailored to your world.
        </p>
      </div>
      
      <div class="flex flex-col gap-24">
        
        <div class="flex flex-col lg:flex-row items-start gap-20">
          <div class="flex-1 flex flex-col gap-6">
            <h3 class="font-signika font-bold text-[28px] leading-[36px] text-[#CBA66A] flex items-center gap-3">
              <span class="text-3xl">🎨</span> Ethical AI Art Generation
            </h3>
            <div class="flex flex-col gap-4">
              <p class="font-signika font-light text-[18px] leading-[30px] text-white/80">
                Create unlimited character portraits, monster designs, and location art using AI models that pay artists royalties on every single image.<br><br>
                Unlike other AI tools, we believe human creativity is the heart of great D&D.<br><br>
                Our Artist Models program ensures the people who inspire our AI actually benefit from your creations.
              </p>
              <p class="font-signika font-bold text-[20px] leading-[30px] text-[#CBA66A]">
                Beautiful results. Clear conscience.
              </p>
            </div>
          </div>
          
          <div class="flex-1 flex flex-col gap-6">
            <h3 class="font-signika font-bold text-[28px] leading-[36px] text-[#CBA66A] flex items-center gap-3">
              <span class="text-3xl">🧙‍♂️</span> ChatGPT, But for TTRPGs
            </h3>
            <div class="flex flex-col gap-4">
              <p class="font-signika font-light text-[18px] leading-[30px] text-white/80">
                Stop getting generic AI responses that don't understand your homebrew paladin's oath mechanics.<br><br>
                Our AI knows D&D, Pathfinder, Starfinder, and more. It remembers your campaign's lore, your house rules, and the NPC your players loved three sessions ago.<br><br>
                Ask about rule interactions. Generate plot hooks that fit your tone. Get NPC dialogue on the fly.
              </p>
              <p class="font-signika font-bold text-[20px] leading-[30px] text-[#CBA66A]">
                Finally, an AI that speaks your language.
              </p>
            </div>
          </div>
        </div>
        
        <div class="flex items-center justify-center gap-2 w-full opacity-50">
           <img src="/Images/Vector 3.png" alt="Left" class="flex-1 h-auto max-h-[2px] object-cover" />
           <div class="w-2 h-2 rotate-45 bg-[#CBA66A]"></div>
           <img src="/Images/Vector 4.png" alt="Right" class="flex-1 h-auto max-h-[2px] object-cover" />
        </div>
        
        <div class="flex flex-col gap-12">
          <div class="flex flex-col lg:flex-row items-center justify-between gap-6">
            <h3 class="font-vollkorn font-bold text-[36px] md:text-[40px] text-[#CBA66A] tracking-wide" style="font-variant: small-caps;">
              Nine Types of Instant Content
            </h3>
            
            <div class="flex items-center gap-6">
              <button 
                class="px-6 py-3 text-black font-signika font-bold text-[16px] rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                style="background: url('/Images/Texture 7.png'), #CBA66A; background-blend-mode: multiply;">
                Generate your first NPC free
              </button>
              
              <div class="flex items-center gap-3">
                <button class="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                  <span class="text-white text-xl">‹</span>
                </button>
                <button class="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                  <span class="text-white text-xl">›</span>
                </button>
              </div>
            </div>
          </div>
          
          <div class="flex gap-6 overflow-x-auto pb-4">
            <div v-for="(content, index) in contentTypes" :key="index" 
                 class="flex-shrink-0 w-[300px] h-[300px] bg-[#0F1012] border border-white/20 rounded-xl overflow-hidden flex flex-col relative group hover:border-[#CBA66A]/50 transition-all duration-300">
              <div class="absolute inset-0">
                <img :src="content.image" :alt="content.title" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              </div>
              <div class="absolute bottom-6 left-6 flex flex-col gap-2 w-[260px]">
                <h4 class="font-signika font-bold text-[24px] text-white">{{ content.title }}</h4>
                <p class="font-signika font-light text-[14px] leading-[20px] text-white/80">{{ content.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex items-center justify-center gap-2 w-full opacity-50">
           <img src="/Images/Vector 3.png" alt="Left" class="flex-1 h-auto max-h-[2px] object-cover" />
           <div class="w-2 h-2 rotate-45 bg-[#CBA66A]"></div>
           <img src="/Images/Vector 4.png" alt="Right" class="flex-1 h-auto max-h-[2px] object-cover" />
        </div>
        
        <div class="flex flex-col gap-10 w-full">
          
          <h3 
            class="font-signika font-semibold text-[40px] md:text-[48px] leading-[1.2] text-left tracking-wide self-start text-[#CBA66A]"
            style="
              background: linear-gradient(180deg, #F0D599 0%, #CBA66A 50%, #8C6B38 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              color: transparent;
              filter: drop-shadow(0px 3px 1px rgba(0,0,0,0.9));
            "
          >
            3D Models Ready to Use
          </h3>
          
          <div class="flex flex-col lg:flex-row items-center gap-16">
            
            <div class="flex-1 flex flex-col gap-8">
              <div class="flex flex-col gap-6 text-[#CCCCCC]">
                <p class="font-signika font-normal text-[20px] leading-[32px]">
                  Generate 3D models of your creatures, characters, and items.
                </p>
                <p class="font-signika font-normal text-[20px] leading-[32px]">
                  Use them in virtual tabletops like Foundry or TaleSpire, or send them straight to your 3D printer for physical minis.
                </p>
                <p class="font-signika font-normal text-[20px] leading-[32px]">
                  From concept to 3D model in minutes. No design experience needed.
                </p>
              </div>
              
              <div class="flex flex-col gap-4 mt-2">
                <div v-for="feature in features3D" :key="feature" class="flex items-center gap-4 group">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="flex-shrink-0">
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#CBA66A"/>
                  </svg>
                  <span class="font-signika font-bold text-[18px] text-white">
                    {{ feature }}
                  </span>
                </div>
              </div>
            </div>
            
            <div class="relative w-full max-w-[600px] h-[400px]">
              
              <div class="absolute -top-5 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-[#1B1A1E] border border-white/20 rounded-full flex items-center gap-3 shadow-xl z-20">
                <div
                  class="w-[20px] h-[20px] bg-[#CBA66A]"
                  style="
                    mask-image: url('/Images/streamline-flex_screenshot-solid.png');
                    mask-size: contain;
                    mask-repeat: no-repeat;
                    mask-position: center;
                    -webkit-mask-image: url('/Images/streamline-flex_screenshot-solid.png');
                    -webkit-mask-size: contain;
                    -webkit-mask-repeat: no-repeat;
                    -webkit-mask-position: center;
                  "
                ></div>
                <span class="font-signika font-medium text-[16px] text-[#CBA66A] tracking-wide uppercase text-sm">In app screenshot</span>
              </div>

              <div class="absolute left-0 top-0 w-full h-full bg-[#0F1012] border border-white/20 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/Images/3d-model.png" 
                  alt="3D Model Preview" 
                  class="w-full h-full object-contain opacity-95" 
                />
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const contentTypes = [
  { 
    title: 'NPCs', 
    description: 'Memorable characters with unique personalities, not generic tavern keepers.',
    image: '/Images/Rectangle 52.png'
  },
  { 
    title: 'Encounters', 
    description: 'Battles that go beyond "roll for initiative." Objectives, terrain, stakes.',
    image: '/Images/Rectangle 55.png'
  },
  { 
    title: 'Villains', 
    description: 'Compelling antagonists with understandable motivations and detailed schemes.',
    image: '/Images/Rectangle 55.png'
  },
  { 
    title: 'Settlements', 
    description: 'Detailed towns with unique features, current events, and plot hooks.',
    image: '/Images/Rectangle 55.png'
  },
  { 
    title: 'Items',
    description: 'Unique magical items with lore, mechanics, and beautiful artwork.',
    image: '/Images/Rectangle 52.png'
  }
]

const features3D = [
  'Works with popular VTTs',
  'STL export for physical minis',
  'Unique models that match your campaign lore'
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
</style>