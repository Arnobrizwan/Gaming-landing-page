<template>
  <section class="relative w-full py-[120px] px-8 lg:px-[120px] bg-[#101113]">
    <div class="relative z-10 max-w-[1488px] mx-auto flex flex-col gap-16">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4">
        <div class="flex flex-col items-center">
          <h2 class="font-vollkorn font-semibold text-4xl md:text-5xl text-center text-white">
            Don't Just Take Our Word for It
          </h2>
          <SectionDivider />
        </div>
        <p class="font-signika font-light text-2xl text-white/60 text-center">
          Here's what other game masters are saying.
        </p>
      </div>
      
      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.name" 
             class="flex flex-col gap-6 p-6 bg-dark-card border border-white/10 rounded-lg">
          <h3 class="font-signika font-semibold text-xl text-gold">"{{ testimonial.title }}"</h3>
          <p class="font-signika font-light text-base text-white/80 leading-7 flex-1">
            "{{ testimonial.quote }}"
          </p>
          <div>
            <p class="font-signika font-semibold text-lg text-white">{{ testimonial.name }}</p>
            <p class="font-signika font-light text-sm text-white/60">{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
      
      <!-- Stats Bar -->
      <div class="flex flex-wrap justify-center gap-8 py-6 px-8 bg-dark-card border border-white/10 rounded-lg">
        <div v-for="stat in stats" :key="stat.label" class="flex items-center gap-3">
          <span class="text-2xl">{{ stat.icon }}</span>
          <span class="font-signika font-semibold text-lg text-white">{{ stat.value }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    title: "I've Finally Run a Full Campaign",
    quote: "I've been trying for 5 years. They always died around session 8 because I got overwhelmed. With MythWeaver, I'm 30 sessions into my best campaign ever. My players don't know I prep in a fraction of the time I used to.",
    name: "Sarah M.",
    role: "DM for 5 years"
  },
  {
    title: "Saved My Campaign and Sanity",
    quote: "Had a newborn, thought I'd have to quit DMing. MythWeaver let me keep going with 1/4 the prep time. Our Tuesday night group is still going strong.",
    name: "Marcus T.",
    role: "Father of two"
  },
  {
    title: "The Artist Royalties Matter",
    quote: "I'm an illustrator, so using AI always felt wrong. Learning MythWeaver pays artists made me actually want to use it. Now I generate concepts here, then commission artists for hero pieces. Everybody wins.",
    name: "Marcus T.",
    role: "Father of two"
  }
]

const stats = [
  { icon: '💰', value: '$2,700 Royalties paid to artists so far', label: 'royalties' },
  { icon: '👥', value: '26,000+ Active DMs', label: 'users' },
  { icon: '📄', value: '1.4M+ Pieces of content generated', label: 'content' }
]
</script>
