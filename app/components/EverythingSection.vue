<template>
  <section class="relative w-full py-[120px] px-8 lg:px-[120px] bg-dark-bg">
    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col gap-16">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4">
        <div class="flex flex-col items-center">
          <h2 class="font-vollkorn font-semibold text-4xl md:text-5xl text-center text-white">
            Everything You Need in One Place
          </h2>
          <SectionDivider />
        </div>
        <p class="font-signika font-light text-2xl text-white/60 text-center">
          Nine types of instant campaign content, all tailored to your world.
        </p>
      </div>
      
      <!-- Two Column Features -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Left: Ethical AI Art -->
        <div class="flex flex-col gap-6">
          <h3 class="font-signika font-semibold text-2xl text-gold flex items-center gap-2">
            <span>🎨</span> Ethical AI Art Generation
          </h3>
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            Create unlimited character portraits, monster designs, and location art using AI models that pay artists royalties on every single image.
          </p>
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            Unlike other AI tools, we believe human creativity is the heart of great D&D.
          </p>
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            Our Artist Models program ensures the people who inspire our AI actually benefit from your creations.
          </p>
          <p class="font-signika font-semibold text-xl text-gold">
            Beautiful results. Clear conscience.
          </p>
        </div>
        
        <!-- Right: ChatGPT for TTRPGs -->
        <div class="flex flex-col gap-6">
          <h3 class="font-signika font-semibold text-2xl text-gold flex items-center gap-2">
            <span>🤖</span> ChatGPT, But for TTRPGs
          </h3>
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            Stop getting generic AI responses that don't understand your homebrew paladin's oath mechanics.
          </p>
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            Our AI knows D&D, Pathfinder, Starfinder, and more. It remembers your campaign's lore, your house rules, and the NPC your players loved three sessions ago.
          </p>
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            Ask about rule interactions. Generate plot hooks that fit your tone. Get NPC dialogue on the fly.
          </p>
          <p class="font-signika font-semibold text-xl text-gold">
            Finally, an AI that speaks your language.
          </p>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="flex items-center justify-center">
        <div class="w-2 h-2 bg-gold-deep rotate-45"></div>
      </div>
      
      <!-- Nine Types of Content -->
      <div class="flex flex-col gap-8">
        <div class="flex items-center justify-between">
          <h3 class="font-signika font-semibold text-2xl text-gold">Nine Types of Instant Content</h3>
          <div class="flex items-center gap-4">
            <button class="bg-gold-dark rounded-lg pb-1">
              <span class="block px-6 py-2 bg-gold rounded-lg font-figtree font-semibold text-base text-black">
                Generate your first NPC free
              </span>
            </button>
            <div class="flex gap-2">
              <button class="w-10 h-10 bg-white/10 border border-white/30 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                <span class="text-white">‹</span>
              </button>
              <button class="w-10 h-10 bg-white/10 border border-white/30 rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                <span class="text-white">›</span>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Content Cards -->
        <div class="flex gap-6 overflow-x-auto pb-4">
          <div v-for="content in contentTypes" :key="content.title" 
               class="flex-shrink-0 w-[240px] h-[320px] bg-dark-card border border-white/10 rounded-lg overflow-hidden flex flex-col">
            <div class="flex-1 bg-gray-700">
              <!-- Content image placeholder -->
            </div>
            <div class="p-4">
              <h4 class="font-signika font-semibold text-lg text-white mb-1">{{ content.title }}</h4>
              <p class="font-signika font-light text-sm text-white/60 capitalize">{{ content.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="flex items-center justify-center">
        <div class="w-2 h-2 bg-gold-deep rotate-45"></div>
      </div>
      
      <!-- 3D Models Section -->
      <div class="flex flex-col lg:flex-row gap-16">
        <div class="flex-1 flex flex-col gap-6">
          <h3 class="font-signika font-semibold text-2xl text-gold">3D Models Ready to Use</h3>
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            Generate 3D models of your creatures, characters, and items.
          </p>
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            Use them in virtual tabletops like Foundry or TaleSpire, or send them straight to your 3D printer for physical minis.
          </p>
          <p class="font-signika font-light text-xl text-white/80 leading-8">
            From concept to 3D model in minutes. No design experience needed.
          </p>
          
          <!-- Features -->
          <div class="flex flex-col gap-3 mt-4">
            <div class="flex items-center gap-3">
              <div class="bullet-gold"></div>
              <span class="font-signika font-semibold text-lg text-white">Works with popular VTTs</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="bullet-gold"></div>
              <span class="font-signika font-semibold text-lg text-white">STL export for physical minis</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="bullet-gold"></div>
              <span class="font-signika font-semibold text-lg text-white">Unique models that match your campaign lore</span>
            </div>
          </div>
        </div>
        
        <!-- 3D Model Preview Placeholder -->
        <div class="w-full lg:w-[600px] h-[400px] bg-dark-card border border-white/10 rounded-lg">
          <div class="absolute top-4 right-4 px-3 py-1 bg-white/10 rounded-full text-white/60 text-sm">
            In app screenshot
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const contentTypes = [
  { title: 'NPCs', description: 'Memorable Characters With Unique Personalities, Not Generic Tavern Keepers.' },
  { title: 'Encounters', description: "Battles That Go Beyond 'Roll For Initiative.' Objectives, Terrain, Stakes." },
  { title: 'Villains', description: 'Compelling Antagonists With Understandable Motivations And Detailed Schemes.' },
  { title: 'Settlements', description: 'Detailed Towns With Unique Features, Events, And Plot Hooks.' }
]
</script>
