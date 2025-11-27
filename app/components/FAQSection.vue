<template>
  <section class="relative w-full py-[120px] px-8 lg:px-[120px] bg-dark-bg">
    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col lg:flex-row gap-[104px]">
      <!-- Left: Title -->
      <div class="w-full lg:w-[436px] py-6">
        <h2 class="font-vollkorn font-semibold text-4xl md:text-5xl text-white leading-[67px]">
          Questions You Might Have
        </h2>
      </div>
      
      <!-- Right: FAQ Items -->
      <div class="flex-1 flex flex-col">
        <div v-for="(faq, index) in faqs" :key="faq.question" 
             class="border-b border-white/20">
          <button @click="toggleFaq(index)" 
                  class="w-full flex items-center justify-between py-8 text-left">
            <div class="flex items-center gap-4">
              <div class="bullet-gold"></div>
              <span class="font-signika font-semibold text-2xl text-white/80">"{{ faq.question }}"</span>
            </div>
            <svg class="w-8 h-8 text-white/80 transition-transform" 
                 :class="{ 'rotate-45': openIndex === index }"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
          </button>
          <div v-show="openIndex === index" class="pb-8">
            <p class="font-signika font-normal text-xl text-white/80 leading-7">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref(0)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index
}

const faqs = [
  {
    question: "Will this replace my creativity?",
    answer: "No. MythWeaver handles the tedious stuff—stat blocks, descriptions, art—so you can focus on the storytelling only YOU can do. Think of it as hiring an assistant, not a replacement."
  },
  {
    question: "Is AI art actually ethical?",
    answer: "The way we do it, yes. Every image you generate pays royalties to the artists who made it possible. We partner with creators rather than exploiting them. Learn more about our Artist Models program →"
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
