<script lang="ts">
  import Pictures from "$lib/components/pictures.svelte";
  import Ornament from "$lib/components/ornament.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<section class="gallery-page">
  <h1 class="page-heading">Bilder</h1>
  <Ornament />
  <div class="gallery-scroll">
    <Pictures images={data.images} />
  </div>
</section>

<style>
  /* Fills the space under the header; the picture strip is centred in it. */
  .gallery-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 1;
    min-height: 0;
  }

  .page-heading {
    flex: 0 0 auto;
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    margin: 0;
    color: var(--text-color);
  }

  /* takes the space left under the heading; the pictures size themselves
     to its height (see --picture-size in pictures.svelte) */
  .gallery-scroll {
    flex: 1 1 auto;
    min-height: 0;
    width: 100%;
    display: flex;
    align-items: center;
    padding: clamp(0.25rem, 1.5vh, 1.5rem) 0;
    container-type: size;
  }
</style>
