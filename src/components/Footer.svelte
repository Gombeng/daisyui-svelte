<script>
  import { data } from "../assets/data";
  const { tabLink } = data;
</script>

<footer
  id="footer"
  class="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10"
>
  <nav class="grid grid-flow-col gap-4">
    {#each tabLink as { href, title }}
      <a href={`#${href}`} class="link link-hover"> {title}</a>
    {/each}
  </nav>
  <!-- socials -->
  <!-- <nav class="grid grid-flow-col gap-4">
    {#each tabLink as { href, title }}
      <a href={`#${href}`} class="link link-hover"> {title}</a>
    {/each}
  </nav> -->
  <aside>
    <p>Copyright © 2025 - All right reserved by Syahrizal Ardana</p>
  </aside>
</footer>
