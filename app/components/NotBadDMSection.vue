<template>
  <section class="relative w-full bg-[#0B0C0E] pt-[80px] pb-[120px] px-[20px] overflow-hidden">
    
    <div 
      class="absolute inset-0 z-0"
      style="
        background-image: url('/Images/Frame 205 (1).png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 1; /* Show the image exactly as it is */
      "
    ></div>

    <div 
      class="absolute inset-0 pointer-events-none z-0"
      style="
        background: radial-gradient(
          circle at center, 
          rgba(11, 12, 14, 0.1) 0%,    /* Almost transparent center */
          rgba(11, 12, 14, 0.4) 60%,   /* Subtle fade */
          #0B0C0E 100%                 /* Solid dark edges */
        );
      "
    ></div>

    <div class="relative z-10 flex flex-col items-center text-center max-w-[1100px] mx-auto">
      
      <h2 
        class="font-vollkorn font-bold text-[36px] md:text-[46px] leading-[1.4] mb-12 tracking-wide"
        style="
          background: linear-gradient(to bottom, #C5A059 0%, #E6C88B 45%, #96753A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0px 3px 0px rgba(0,0,0,0.8));
          font-variant: small-caps;
        "
      >
        You’re Not a Bad DM. You’re Just Exhausted.
      </h2>

      <div class="flex flex-col gap-8 font-signika text-[20px] md:text-[24px] leading-[36px] text-white/80 font-light max-w-[900px]">
        
        <p>
          You want to create immersive worlds with rich detail.
        </p>

        <p>
          Instead, you're improvising, apologizing to your players, and<br class="hidden md:block"/>
          wondering if you should just cancel next session.
        </p>

        <p>
          Another campaign you cared about, slowly dying from DM<br class="hidden md:block"/>
          burnout.
        </p>

      </div>

      <h3 
        class="font-vollkorn font-bold text-[32px] md:text-[38px] mt-16 mb-10 tracking-wide"
        style="
          background: linear-gradient(to bottom, #C5A059 0%, #E6C88B 45%, #96753A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0px 3px 0px rgba(0,0,0,0.8));
          font-variant: small-caps;
        "
      >
        It doesn't have to be this way.
      </h3>

      <button
        class="px-9 py-4 text-black font-signika text-[20px] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
        style="
          background: url('/Images/Texture 7.png'), #CBA66A; 
          background-blend-mode: multiply;
          box-shadow: 0 0 25px rgba(203, 166, 106, 0.4), 0 5px 15px rgba(0,0,0,0.5);
        ">
        Start Creating Free
      </button>

    </div>
  </section>
</template>

<script>
export default {
  name: 'NotBadDmSection'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vollkorn+SC:wght@600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@300;400;600&display=swap');

.font-vollkorn { font-family: 'Vollkorn SC', serif; }
.font-signika { font-family: 'Signika', sans-serif; }
</style>