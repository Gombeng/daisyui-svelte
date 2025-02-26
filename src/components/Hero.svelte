<script>
  import { data } from "../assets/data";
  const { name, position, desc } = data.hero;
</script>

<section id="hero" class="hero min-h-fit pt-10">
  <div class="hero-content text-center">
    <div>
      <h2 class="text-md md:text-2xl xl:text-5xl font-bold">{position}</h2>
      <h1 class="text-3xl md:text-6xl xl:text-9xl font-black">{name}</h1>
      <p
        class="py-6 text-xs md:text-lg xl:text-2xl max-w-sm md:max-w-md xl:max-w-3xl mx-auto"
      >
        {desc}
      </p>
      <button
        class="btn btn-dash md:border-2 xl:border-4 btn-primary btn-sm md:btn-md lg:btn-lg xl:btn-xl px-6 md:px-8 lg:px-10 xl:px-12"
        >Show CV</button
      >
    </div>
  </div>
</section>
