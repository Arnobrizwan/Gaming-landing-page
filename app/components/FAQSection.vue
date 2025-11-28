<template>
  <section class="relative w-full py-[120px] px-[50px] lg:px-[100px] overflow-hidden bg-[#0B0C0E]">
    
    <div 
      class="absolute inset-0 z-0"
      style="
        background-image: url('/Images/Frame 216.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      "
    ></div>

    <div class="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>

    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col lg:flex-row items-start gap-20">
      
      <div class="w-full lg:w-[400px] flex-shrink-0 sticky top-10 mt-[-36000px]">
        <h2 
          class="font-vollkorn font-bold text-[48px] leading-[1.1] tracking-wide"
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
          Questions You<br/>Might Have
        </h2>
      </div>
      
      <div class="flex-1 w-full flex flex-col mt-3">
        
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="border-b border-white/10 py-6 first:pt-0 last:border-none"
        >
          <button 
            @click="toggleFaq(index)" 
            class="w-full flex items-start justify-between text-left group"
          >
            <div class="flex items-start gap-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="flex-shrink-0 mt-[6px]">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="#CBA66A"/>
              </svg>
              
              <span class="font-signika font-bold text-[20px] leading-[32px] text-white/90 group-hover:text-[#CBA66A] transition-colors">
                "{{ faq.question }}"
              </span>
            </div>
            
            <span class="text-white/60 text-2xl font-light ml-4 mt-1">
              {{ openIndex === index ? '−' : '+' }}
            </span>
          </button>
          
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div v-show="openIndex === index" class="mt-4 pl-9 pr-8">
              <p class="font-signika font-light text-[18px] leading-[28px] text-white/70">
                {{ faq.answer }}
              </p>
            </div>
          </transition>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(0) // First item open by default

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index
}

const faqs = [
  {
    question: "Will this replace my creativity?",
    answer: "No. MythWeaver handles the tedious stuff—stat blocks, descriptions, art—so you can focus on the storytelling only YOU can do. Think of it as hiring an assistant, not a replacement."
  },
  {
    question: "Is AI art actually ethical?",
    answer: "The way we do it, yes. Every image you generate pays royalties to the artists who made it possible. We partner with creators rather than exploiting them."
  },
  {
    question: "I'm not tech-savvy. Is this complicated?",
    answer: "If you can use ChatGPT, you can use MythWeaver. Most DMs are generating content within 5 minutes of signing up. No coding, no complex prompts, just plain language."
  },
  {
    question: "What if my campaign is really unique/homebrew?",
    answer: "Perfect. Our AI learns your campaign's specifics and generates content that fits YOUR world, not generic fantasy tropes. The more you use it, the better it gets at matching your style."
  },
  {
    question: "What game systems do you support?",
    answer: "D&D 5e, Pathfinder, Starfinder, and most d20 systems. Our AI understands the nuances and mechanics of different rule sets."
  },
  {
    question: "Can I actually print the 3D models?",
    answer: "Yep! Export STL files ready for your 3D printer, or import them directly into virtual tabletops like Foundry VTT, TaleSpire, and others."
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600;700&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
</style>