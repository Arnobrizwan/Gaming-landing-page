<template>
  <section class="relative w-full bg-[#0B0C0E] pt-12 lg:pt-[80px] pb-16 lg:pb-[120px] px-6 lg:px-[20px] overflow-hidden">
    
    <div 
      class="absolute inset-0 z-0"
      style="
        background-image: url('/Images/Frame 205 (1).png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 1;
      "
    ></div>

    <div 
      class="absolute inset-0 pointer-events-none z-0"
      style="
        background: radial-gradient(
          circle at center, 
          rgba(11, 12, 14, 0.1) 0%,    
          rgba(11, 12, 14, 0.4) 60%,   
          #0B0C0E 100%                 
        );
      "
    ></div>

    <div class="relative z-10 flex flex-col items-center text-center max-w-[1100px] mx-auto">
      
      <h2 
        class="font-vollkorn font-bold text-[28px] md:text-[36px] lg:text-[46px] leading-[1.3] lg:leading-[1.4] mb-8 lg:mb-12 tracking-wide"
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
        You’re Not a Bad DM.<br class="block md:hidden"/> You’re Just Exhausted.
      </h2>

      <div class="flex flex-col gap-6 lg:gap-8 font-signika text-[16px] md:text-[20px] lg:text-[24px] leading-relaxed lg:leading-[36px] text-white/80 font-light max-w-[900px]">
        
        <p>
          You want to create immersive worlds with rich detail.
        </p>

        <p>
          Instead, you're improvising, apologizing to your players, and<br class="hidden lg:block"/>
          wondering if you should just cancel next session.
        </p>

        <p>
          Another campaign you cared about, slowly dying from DM<br class="hidden lg:block"/>
          burnout.
        </p>

      </div>

      <h3 
        class="font-vollkorn font-bold text-[24px] md:text-[30px] lg:text-[38px] mt-10 lg:mt-16 mb-6 lg:mb-10 tracking-wide"
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
        class="px-6 py-3 lg:px-9 lg:py-4 text-black font-signika text-[16px] lg:text-[20px] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
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