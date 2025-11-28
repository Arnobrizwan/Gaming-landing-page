<template>
  <section class="relative w-full bg-[#0B0C0E] px-[100px] pb-[120px] z-50 overflow-hidden">
    
    <div class="flex flex-col items-center justify-center mb-12 pt-6 gap-2">
      
      <img 
        src="/Images/We Know How it feels.png" 
        alt="We Know How It Feels" 
        class="h-auto max-w-full object-contain"
      />
      
      <div class="flex items-center justify-center gap-2 w-full max-w-[600px] opacity-90">
        
        <img 
          src="/Images/Vector 3.png" 
          alt="Divider Left" 
          class="flex-1 h-auto max-h-[10px] object-contain object-right" 
        />
        
        <img 
          src="/Images/Rectangle 125.png" 
          alt="Divider Center" 
          class="h-[22px] w-auto object-contain" 
        />
        
        <img 
          src="/Images/Vector 4.png" 
          alt="Divider Right" 
          class="flex-1 h-auto max-h-[10px] object-contain object-left" 
        />
        
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <div class="font-signika">
        <h3 class="text-[#CBA66A] text-[20px] font-semibold mb-6">
          It’s Tuesday night. Your game is Thursday. And you still need to:
        </h3>

        <ul class="space-y-4 mb-8">
          <li class="flex items-start gap-4 text-[18px] text-white/80 font-light">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="flex-shrink-0 mt-1">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#CBA66A"/>
            </svg>
            <span>Flesh out that villain’s master plan</span>
          </li>
          <li class="flex items-start gap-4 text-[18px] text-white/80 font-light">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="flex-shrink-0 mt-1">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#CBA66A"/>
            </svg>
            <span>Create the five NPCs your players will definitely interrogate</span>
          </li>
          <li class="flex items-start gap-4 text-[18px] text-white/80 font-light">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="flex-shrink-0 mt-1">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#CBA66A"/>
            </svg>
            <span>Draw (or find) a decent battle map</span>
          </li>
          <li class="flex items-start gap-4 text-[18px] text-white/80 font-light">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="flex-shrink-0 mt-1">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#CBA66A"/>
            </svg>
            <span>Write descriptions for the haunted mansion</span>
          </li>
          <li class="flex items-start gap-4 text-[18px] text-white/80 font-light">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="flex-shrink-0 mt-1">
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#CBA66A"/>
            </svg>
            <span>Stat out custom monsters because the book versions are boring</span>
          </li>
        </ul>

        <p class="text-[#CBA66A] text-[20px] font-semibold mb-4">
          So you stay up until 2am. Again.
        </p>

        <p class="text-white/80 text-[18px] leading-relaxed mb-6 max-w-[500px] font-light">
          And then your players spend 45 minutes interrogating the innkeeper you made up on the spot.
        </p>

        <p class="text-[#CBA66A] text-[20px] font-semibold">
          Sound familiar?
        </p>
      </div>

      <div class="relative">
        <img 
          src="/Images/Rotating image.png" 
          alt="DM Prep Fatigue with Laptop and Notes" 
          class="w-full h-auto rounded-lg shadow-2xl"
        />
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'WeKnowSection'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@400;600&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
.font-figtree { font-family: 'Figtree', sans-serif; }
</style>