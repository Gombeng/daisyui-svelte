<script>
  import Icon from "@iconify/svelte";
  import Text from "./Text.svelte";

  export let href,
    title,
    addStyle = "";
</script>

<a
  {href}
  target="_blank"
  class={`link link-warning flex items-center ${addStyle}`}
>
  <Text variant="p">{title}</Text>
  <Icon
    icon="material-symbols:link"
    width="20"
    height="20"
    class="scale-70 md:scale-85"
  />
</a>
