<script lang="ts">
  import { data } from "./assets/data";
  import { About, Footer, Hero, Navbar, ThemeSelect, Timeline, Work } from "./components";

  const { themes } = data;
  let currentTheme = "forest";
  function updateTheme(theme: string) {
    currentTheme = theme;
  }
</script>

<div data-theme={currentTheme}>
  <!-- <Navbar /> -->
  <main>
    <Hero />
    <Timeline />
    <About />
    <Work />
    <ThemeSelect {themes} onThemeChange={updateTheme} />
  </main>
  <Footer />
</div>
