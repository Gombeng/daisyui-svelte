<script lang="ts">
  import { data } from "./assets/data";
  import {
    Experience,
    Footer,
    Hero,
    Techstack,
    ThemeSelect,
    Work,
  } from "./components";

  const { themes } = data;
  let currentTheme = "dracula";
  function updateTheme(theme: string) {
    currentTheme = theme;
  }
</script>

<div data-theme={currentTheme}>
  <main
    class="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto"
  >
    <Hero />
    <Experience />
    <Work />
    <Techstack />
    <ThemeSelect {themes} onThemeChange={updateTheme} />
  </main>
  <Footer />
</div>
