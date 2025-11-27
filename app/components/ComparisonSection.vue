<template>
  <section class="relative w-full py-[120px] px-8 lg:px-[120px] bg-dark-bg">
    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col gap-16">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4">
        <div class="flex flex-col items-center">
          <h2 class="font-vollkorn font-semibold text-4xl md:text-5xl text-center text-white">
            Why Choose MythWeaver Over Everything Else?
          </h2>
          <SectionDivider />
        </div>
        <p class="font-signika font-light text-2xl text-white/60 text-center">
          Here's what other game masters are saying.
        </p>
      </div>
      
      <!-- Comparison Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Left: Other Tools -->
        <div class="flex flex-col gap-8 p-8 bg-dark-card border border-white/10 rounded-lg">
          <div class="flex items-center gap-3">
            <span class="text-error text-2xl">✕</span>
            <h3 class="font-signika font-semibold text-xl text-white uppercase tracking-wide">Other Tools Make You Choose</h3>
          </div>
          
          <div class="flex flex-col gap-6">
            <div v-for="item in otherTools" :key="item.title" class="flex flex-col gap-2">
              <div class="flex items-center gap-3">
                <div class="bullet-gold"></div>
                <span class="font-signika font-semibold text-lg text-white uppercase">{{ item.title }}</span>
              </div>
              <p class="font-signika font-light text-base text-white/80 leading-7 ml-8">{{ item.description }}</p>
            </div>
          </div>
          
          <div class="mt-4">
            <p class="font-signika font-semibold text-lg text-error">Result:</p>
            <p class="font-signika font-semibold text-xl text-white">
              You're still juggling multiple tools and spending hours on prep.
            </p>
          </div>
        </div>
        
        <!-- Right: MythWeaver -->
        <div class="flex flex-col gap-8 p-8 bg-dark-card border border-gold/30 rounded-lg">
          <div class="flex items-center gap-3">
            <span class="text-success text-2xl">✓</span>
            <h3 class="font-signika font-semibold text-xl text-white uppercase tracking-wide">MythWeaver Gives You Everything</h3>
          </div>
          
          <div class="flex flex-col gap-6">
            <div v-for="item in mythWeaverFeatures" :key="item.title" class="flex flex-col gap-2">
              <div class="flex items-center gap-3">
                <div class="bullet-gold"></div>
                <span class="font-signika font-semibold text-lg text-white uppercase">{{ item.title }}</span>
              </div>
              <p class="font-signika font-light text-base text-white/80 leading-7 ml-8">{{ item.description }}</p>
            </div>
          </div>
          
          <div class="mt-4">
            <p class="font-signika font-semibold text-lg text-success">Result:</p>
            <p class="font-signika font-semibold text-xl text-success">
              You prep in 30 minutes instead of 3 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const otherTools = [
  { title: 'Generic AI (ChatGPT, Claude)', description: "Great at writing. Terrible at understanding your homebrew dragonborn paladin's oath mechanics." },
  { title: 'AI Art Generators (Midjourney, DALL-E)', description: 'Beautiful images built on exploited artists. Zero TTRPG context.' },
  { title: 'Campaign Managers (Obsidian, World Anvil)', description: 'Fancy wikis that still require YOU to write everything yourself.' }
]

const mythWeaverFeatures = [
  { title: 'TTRPG-Specific AI', description: 'Understands your game system, remembers your lore, speaks your language.' },
  { title: 'Ethical Art Generation', description: 'Every image pays royalties to artists. No guilt, just great results.' },
  { title: 'Instant Content Creation', description: '9 types of campaign content generated in seconds, not hours.' },
  { title: 'One Integrated Platform', description: 'Everything you need talking to each other seamlessly.' }
]
</script>
