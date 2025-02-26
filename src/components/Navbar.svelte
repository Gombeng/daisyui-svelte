<script>
  import { writable } from "svelte/store";

  let tabLink = [
    {
      title: "Hero",
      href: "hero",
    },
    {
      title: "About",
      href: "about",
    },
    {
      title: "Work",
      href: "work",
    },
  ];
  const activeTab = writable(0);
  function handleClick(index) {
    $activeTab = index;
  }
</script>

<header class="fixed py-5 left-1/2 -translate-x-1/2">
  <!-- <header class="flex justify-center py-5"> -->
  <div role="tablist" class="tabs tabs-box w-fit">
    {#each tabLink as tab, index}
      <a
        href={`#${tab.href}`}
        on:click={() => handleClick(index)}
        role="tab"
        class={`tab ${index === $activeTab ? "tab-active" : ""}`}
      >
        {tab.title}
      </a>
    {/each}
  </div>
</header>
