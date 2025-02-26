<script>
  import { data } from "../assets/data";
  const { experiences } = data.about;
</script>

<section id="about" class="hero min-h-screen">
  <div class="hero-content">
    <div>
      <h1 class="xl:text-9xl font-bold mb-10 text-center">Experiences</h1>
      {#each experiences as exp}
        <div
          class="card bg-base-200 mb-5 border-4 border-neutral border-dashed"
        >
          <div class="card-body p- px-">
            <div class="flex justify-between items-center gap-5 mb-3">
              <div>
                <h2 class="card-title text-">{exp.position}</h2>
                <p class="text">{exp.company} - {exp.location}</p>
              </div>
              <div>
                <p class="text- font-semibold">
                  {exp.start} - {exp.end}
                </p>
              </div>
            </div>
            <ul class="list-disc ms-">
              {#each exp.tasks as task}
                <li class="mb-2">{task}</li>
              {/each}
            </ul>
            <div class="pt-2 flex flex-wrap gap-2">
              {#each exp.techStacks as stack}
                <div class="badge badge-neutral p-5 px-8 rounded-full">{stack}</div>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
