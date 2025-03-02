<script>
  import { data } from "../assets/data";
  import Text from "./Text.svelte";
  import LinkItem from "./LinkItem.svelte";
  const { name, position, desc, links } = data.hero;
</script>

<section id="hero" class="hero">
  <div class="hero-content">
    <div>
      <Text variant="h2">
        {position ?? "Full-stack Engineer"}
      </Text>
      <Text variant="h1">
        {name ?? "Your name"}
      </Text>
      <Text variant="p" addStyle="pt-5">
        {desc ?? "What does you do?"}
      </Text>

      <div class="flex flex-wrap gap-2 md:gap-4 xl:gap-6 mt-2 xl:mt-5">
        {#each links as { title, link }}
          <LinkItem href={link} {title} />
        {/each}
      </div>
    </div>
  </div>
</section>
