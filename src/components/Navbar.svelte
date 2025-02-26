<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { data } from "../assets/data";

  const { tabLink } = data;
  const activeTab = writable(0);
  /**
   * @param {number} index
   */
  function handleClick(index) {
    activeTab.set(index);
  }

  onMount(() => {
    const sections = tabLink.map(({ href }) => document.getElementById(href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabLink.findIndex(
              ({ href }) => href === entry.target.id
            );
            if (index !== -1) {
              activeTab.set(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  });
</script>

<header class="w-full fixed py-[1rem] z-100">
  <div role="tablist" class="tabs tabs-box md:tabs-md lg:tabs-lg w-fit mx-auto">
    {#each tabLink as { href, title }, index}
      <a
        href={`#${href}`}
        on:click={() => handleClick(index)}
        role="tab"
        class={`tab mx-2 ${index === $activeTab ? "tab-active font-bold" : ""}`}
      >
        {title}
      </a>
    {/each}
  </div>
</header>
