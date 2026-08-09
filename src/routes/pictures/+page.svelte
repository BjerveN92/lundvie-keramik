<script lang="ts">
  import Pictures from "$lib/components/pictures.svelte";
  import type { PageData } from "./$types";

  let { data } = $props<{ data: PageData }>();
</script>

<section class="gallery-page">
  <h1 class="page-heading">Bilder</h1>
  <Pictures images={data.images} />
</section>

<style>
  .gallery-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 1rem;
  }

  .page-heading {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    margin: 0 0 2.5rem;
  }
</style>
