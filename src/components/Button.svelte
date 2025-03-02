<script>
  export let type = "primary";
  export let onClick = () => {};
</script>

<button on:click={onClick} class={`btn btn-${type} xl:btn-lg p-5 xl:p-6 px-6 xl:px-8`}>
  <slot>Button</slot>
</button>
