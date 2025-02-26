<script>
  import { data } from "../assets/data";
  const { timeline } = data.hero;
</script>

<section id="timeline" class="hero p-5 mb-10">
  <div class="text-center">
    <h1 class="xl:text-6xl font-bold mb-10">Educations</h1>
    <ul class="timeline timeline-vertical lg:timeline-horizontal">
      {#each timeline as { year, event }}
        <li>
          <hr />
          <div
            class="timeline-start font-semibold text-xs md:text-md xl:text-xl"
          >
            .....
          </div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div
            class="timeline-start font-semibold text-xs md:text-md xl:text-xl"
          >
            {year}
          </div>
          <div class="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          {#if event}
            <div
              class="timeline-end timeline-box font-semibold text-xs md:text-md xl:text-xl"
            >
              {event}
            </div>
          {/if}
          <hr />
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- <div class="m-5 flex justify-center"></div> -->
