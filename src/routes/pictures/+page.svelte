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
    border-top: 1px solid var(--color-black);
    padding-top: 4rem;
  }

  .page-heading {
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 400;
    margin: 0 0 2.5rem;
  }
</style>
