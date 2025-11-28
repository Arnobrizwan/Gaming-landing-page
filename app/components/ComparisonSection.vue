<template>
  <section class="relative w-full py-[100px] px-[50px] lg:px-[100px] overflow-hidden bg-[#0B0C0E]">
    
    <div 
      class="absolute inset-0 z-0"
      style="
        background-image: url('/Images/Frame 214.png');
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
          Why Choose MythWeaver Over Everything Else?
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
      
      <div class="flex flex-col lg:flex-row gap-16 w-full">
        
        <div class="flex-1 flex flex-col gap-6">
          <div class="flex items-center gap-4 mb-2">
            <div class="w-8 h-8 rounded-full flex items-center justify-center bg-[#DD3B3B]/10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" class="text-[#DD3B3B]">
                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
              </svg>
            </div>
            <h3 class="font-signika font-bold text-[28px] leading-[36px] text-[#DD3B3B] uppercase">
              Other Tools Make You Choose
            </h3>
          </div>
          
          <div class="flex flex-col gap-8">
            <div v-for="(item, index) in otherTools" :key="index" class="flex flex-col gap-2">
              <div class="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="flex-shrink-0">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#CBA66A"/>
                </svg>
                <span class="font-signika font-bold text-[20px] leading-[28px] text-white/90 uppercase">
                  {{ item.title }}
                </span>
              </div>
              <p class="font-signika font-light text-[18px] leading-[28px] text-white/80 pl-8">
                {{ item.description }}
              </p>
            </div>
          </div>
          
          <div class="pl-8 mt-2">
            <p class="font-signika text-[20px] leading-[30px]">
              <span class="font-bold text-[#DD3B3B]">Result:</span> <br>
              <span class="font-light text-white/90">You're still juggling multiple tools and spending hours on prep.</span>
            </p>
          </div>
        </div>
        
        <div class="hidden lg:block w-px bg-white/10 self-stretch"></div>
        
        <div class="flex-1 flex flex-col gap-6">
          <div class="flex items-center gap-4 mb-2">
            <div class="w-8 h-8 rounded-full flex items-center justify-center bg-[#5CD691]/10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" class="text-[#5CD691]">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 class="font-signika font-bold text-[28px] leading-[36px] text-[#5CD691] uppercase">
              MythWeaver Gives You Everything
            </h3>
          </div>
          
          <div class="flex flex-col gap-8">
            <div v-for="(item, index) in mythWeaverFeatures" :key="index" class="flex flex-col gap-2">
              <div class="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="flex-shrink-0">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#CBA66A"/>
                </svg>
                <span class="font-signika font-bold text-[20px] leading-[28px] text-white/90 uppercase">
                  {{ item.title }}
                </span>
              </div>
              <p class="font-signika font-light text-[18px] leading-[28px] text-white/80 pl-8">
                {{ item.description }}
              </p>
            </div>
          </div>
          
          <div class="pl-8 mt-2">
            <p class="font-signika text-[20px] leading-[30px]">
              <span class="font-bold text-[#5CD691]">Result:</span> <br>
              <span class="font-light text-white/90">You prep in 30 minutes instead of 3 hours.</span>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
const otherTools = [
  { 
    title: 'Generic AI (ChatGPT, Claude)', 
    description: "Great at writing. Terrible at understanding your homebrew dragonborn paladin's oath mechanics." 
  },
  { 
    title: 'AI Art Generators (Midjourney, DALL-E)', 
    description: 'Beautiful images built on exploited artists. Zero TTRPG context.' 
  },
  { 
    title: 'Campaign Managers (Obsidian, World Anvil)', 
    description: 'Fancy wikis that still require YOU to write everything yourself.' 
  }
]

const mythWeaverFeatures = [
  { 
    title: 'TTRPG-Specific AI', 
    description: 'Understands your game system, remembers your lore, speaks your language.' 
  },
  { 
    title: 'Ethical Art Generation', 
    description: 'Every image pays royalties to artists. No guilt, just great results.' 
  },
  { 
    title: 'Instant Content Creation', 
    description: '9 types of campaign content generated in seconds, not hours.' 
  },
  { 
    title: 'One Integrated Platform', 
    description: 'Everything you need talking to each other seamlessly.' 
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600;700&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
</style>