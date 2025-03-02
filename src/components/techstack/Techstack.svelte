<script>
  import { data } from "../../assets/data";
  import Text from "../Text.svelte";
  import TechstackItem from "./TechstackItem.svelte";

  const { techStacks: items } = data;
</script>

<section id="tech-stack" class="hero py-5">
  <div class="hero-content gap-5 flex-col">
    <div>
      <Text variant="h3">Tech & Tools</Text>
    </div>
    <div class="flex flex-wrap justify-center gap-1 md:gap-2 mx-auto">
      {#each items as item}
        <TechstackItem {item} />
      {/each}
    </div>
  </div>
</section>
