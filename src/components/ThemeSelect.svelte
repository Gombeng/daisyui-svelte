<script lang="ts">
  export let themes: string[] = [];
  export let onThemeChange: (theme: string) => void;

  let selectedTheme = "Theme";

  function handleChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    selectedTheme = target.value;
    onThemeChange(selectedTheme);
  }
</script>

<div
  class="w-full 9xl:max-w-7xl mx-auto fixed px-[1rem] bottom-[1rem] left-1/2 -translate-x-1/2 flex justify-between"
>
  <select
    class="select select-primary md:select-md lg:select-lg focus:outline-hidden w-fit"
    on:change={handleChange}
  >
    <option disabled selected>{selectedTheme}</option>
    {#each themes as theme}
      <option value={theme.toLowerCase()}>{theme}</option>
    {/each}
  </select>
  <a href="#hero">
    <button class="ms-3 btn btn-primary md:btn-md lg:btn-lg">Top</button>
  </a>
</div>
