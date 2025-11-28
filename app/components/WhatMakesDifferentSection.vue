<template>
  <section class="relative w-full pb-[120px] pt-[100px] px-[50px] lg:px-[100px] overflow-hidden">
    
    <div 
      class="absolute inset-0 z-0"
      style="
        background-image: url('/Images/Frame 207.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    ></div>

    <div class="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>

    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col items-center gap-20">
      
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
          What Makes Us Different
        </h2>

        <div class="flex items-center justify-center gap-2 w-full max-w-[600px] mt-1 opacity-90">
          <img src="/Images/Vector 3.png" alt="Left" class="flex-1 h-auto max-h-[10px] object-contain object-right" />
          <img src="/Images/Rectangle 125.png" alt="Diamond" class="h-[22px] w-auto object-contain" />
          <img src="/Images/Vector 4.png" alt="Right" class="flex-1 h-auto max-h-[10px] object-contain object-left" />
        </div>

        <p class="font-signika font-light text-[20px] leading-[30px] text-white/60 text-center mt-6">
          Every image you generate pays royalties to the artists who made it possible.
        </p>
      </div>
      
      <div class="flex flex-col items-center gap-16 w-full">
        
        <div class="flex items-center gap-3 px-6 py-3 bg-[#18191B] border border-white/10 rounded-full shadow-lg backdrop-blur-sm">
          <div class="w-[40px] h-[40px] rounded-full bg-[#CBA66A]/10 flex items-center justify-center overflow-hidden">
            <img 
              src="/Images/ChatGPT Image Nov 25, 2025, 11_47_44 AM 1.png" 
              alt="Coin Icon" 
              class="w-[20px] h-auto object-contain"
            />
          </div>
          <span class="font-figtree font-bold text-[18px] text-white tracking-wide">$2,700 paid out so far</span>
        </div>
        
        <p class="max-w-[900px] font-signika font-medium text-[28px] leading-[44px] text-center text-white/90">
          “No exploitation. No guilt. Just beautiful art that <br class="hidden md:block"/>
          <span style="color: #CBA66A;">supports the creative community we all love.”</span>
        </p>
        
        <div class="flex flex-nowrap justify-center gap-5 w-full overflow-x-auto pb-4">
          <div v-for="artist in artists" :key="artist.name" 
               class="w-[215px] h-[330px] flex-shrink-0 bg-[#121315] border border-white/10 rounded-lg shadow-lg flex flex-col overflow-hidden hover:border-[#CBA66A]/30 transition-colors duration-300 group">
            
            <div class="p-4 flex flex-col gap-1 h-[110px]">
              <h3 class="font-signika font-bold text-[15px] leading-[20px] text-white group-hover:text-[#CBA66A] transition-colors">
                {{ artist.name }}
              </h3>
              <p class="font-signika font-light text-[11px] leading-[15px] text-white/60 line-clamp-3">
                {{ artist.themes }}
              </p>
            </div>
            
            <div class="flex-1 w-full relative">
              <img 
                :src="artist.image" 
                :alt="artist.name" 
                class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const artists = [
  { 
    name: 'Freya Haze Marquardt', 
    themes: 'Themes: Lucid dreaming, landscapes, creatures, and monsters', 
    image: '/Images/Rectangle 50.png' 
  },
  { 
    name: 'Tamás Patkós', 
    themes: 'Themes: Drow, Aasimar, Fire Genasi, Female full-body', 
    image: '/Images/Rectangle 50 (1).png' 
  },
  { 
    name: 'B Ceasar Vitorino', 
    themes: 'Themes: Dragonborn, Tieflings, Halflings, Painted-style', 
    image: '/Images/Rectangle 50 (3).png' 
  },
  { 
    name: 'Aicel Escalada', 
    themes: 'Themes: Coming soon...', 
    image: '/Images/Rectangle 50 (4).png' 
  },
  { 
    name: 'Lancel Lopez', 
    themes: 'Themes: Coming soon...', 
    image: '/Images/Rectangle 50 (5).png' 
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;700&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
.font-figtree { font-family: 'Figtree', sans-serif; }
</style>