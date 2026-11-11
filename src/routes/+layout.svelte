<script lang="ts">
  import { page } from "$app/state";
  import { untrack } from "svelte";
  import logo from "$lib/assets/lundvie_keramik_logo.png";
  import bgPhoto from "$lib/assets/Messenger_creation_8FD094FB-71F8-470E-B830-5E8A95A3793A.jpeg";
  import workshopPhoto from "$lib/assets/verkstan1.jpg";
  import aboutPhoto from "$lib/assets/bkrnd_1.jpg";
  import cupsPhoto from "$lib/assets/Messenger_creation_D8975E6A-430C-485D-920B-C1C75D5A16E7.jpeg";
  import "@fontsource-variable/josefin-sans";
  import "@fontsource-variable/josefin-sans/wght-italic.css";
  let { children } = $props();

  // one background layer per page — pages may share a photo, but each
  // still gets its own layer so every page change dips through black
  const backgrounds = [
    { path: "/about", src: aboutPhoto },
    { path: "/pictures", src: workshopPhoto },
    { path: "/kontakt", src: cupsPhoto },
    { path: "/", src: bgPhoto }, // fallback, keep last
  ];
  const currentBg = $derived(
    backgrounds.find((bg) => page.url.pathname.startsWith(bg.path))!
  );

  // a photo only fades in once it's fully decoded, so it never appears
  // half-loaded; until then the screen just stays black
  // (the first page's photo counts as ready right away, so it's there on load)
  let ready: Record<string, boolean> = $state({
    [untrack(() => currentBg.src)]: true,
  });

  $effect(() => {
    for (const { src } of backgrounds) {
      if (ready[src]) continue;
      const img = new Image();
      img.src = src;
      img
        .decode()
        .catch(() => {})
        .then(() => (ready[src] = true));
    }
  });
</script>

<div class="page-wrapper">
  <!-- one layer per page: the old one fades to black, then the new one
       fades up from black -->
  {#each backgrounds as bg (bg.path)}
    <div
      class="bg"
      class:visible={bg === currentBg && ready[bg.src]}
      style="background-image: url({bg.src});"
      aria-hidden="true"
    ></div>
  {/each}

  <header>
    <div class="logo-wrapper">
      <a
        href="/"
        class="logo-link"
        aria-label="Lundvie Keramik"
        style="--logo: url({logo});"
      >
        <img src={logo} alt="" class="logo" />
      </a>
    </div>
    <nav>
      <ul>
        <li><a href="/" class:active={page.url.pathname === "/"}>Hem</a></li>
        <li>
          <a href="/about" class:active={page.url.pathname === "/about"}
            >Om oss</a
          >
        </li>
        <li>
          <a href="/pictures" class:active={page.url.pathname === "/pictures"}
            >Bildgalleri</a
          >
        </li>
        <li>
          <a href="/kontakt" class:active={page.url.pathname === "/kontakt"}
            >Kontakt</a
          >
        </li>
      </ul>
    </nav>
  </header>

  <main>
    {@render children()}
  </main>

  <footer>© 2026 LUNDVIE KERAMIK</footer>
</div>

<style>
  :global(:root) {
    --color-beige: #050402;
    --color-beige-dark: #ccbb90;
    --color-black: #0a0a0a;
    /* the deep blue at the top of the scrim; also shown between photos */
    --color-blue: rgb(1, 1, 68);
    --color-white: rgb(252, 252, 252);

    /* lines-only look: no panels, just hairlines and ornaments straight on
       the photo. Light text + a scrim keep it legible on any photo. */
    --text-color: #b2cca8;
    --accent: var(--text-color);
    --line: rgba(248, 246, 241, 0.5);
    --text-shadow: 0 1px 10px rgb(0, 0, 0);
  }

  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }

  /* the site itself never scrolls — everything fits the viewport */
  :global(html),
  :global(body) {
    height: 100%;
    overflow: hidden;
  }

  :global(body) {
    font-family: "Gill Sans", "Gill Sans MT", "Gill Sans Nova",
      "Josefin Sans Variable", sans-serif;
    background-color: var(--color-black);
    color: var(--text-color);
    margin: 0;
    font-feature-settings: "liga", "kern";
  }

  /* GLOBAL TYPOGRAPHY — Gill Sans (systemfont), med Josefin Sans som
     Gill Sans-lik reserv. Rubriker i lätt vikt, kursiva med brett bokstavsavstånd. */
  :global(h1) {
    font-weight: 300;
    font-style: italic;
    line-height: 1.2;
    letter-spacing: 0.06em;
  }

  :global(p) {
    font-weight: 400;
    line-height: 1.7;
    letter-spacing: 0.02em;
  }

  .page-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
    isolation: isolate;
    background-color: var(--color-blue); /* seen while photos change */
    text-shadow: var(--text-shadow);
  }

  /* full-bleed background photos + a dark scrim on top of them */
  .bg,
  .page-wrapper::after {
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  /* fading out: quick dip to the black body colour */
  .bg {
    background-size: cover;
    background-position: center;
    opacity: 0;
    transform: scale(1.03);
    transition:
      opacity 0.6s ease-in,
      transform 0.6s ease-in;
  }

  /* fading in: waits for the old photo to reach black, then rises slowly
     with a gentle settle from a slight zoom */
  .bg.visible {
    opacity: 1;
    transform: scale(1);
    transition:
      opacity 1.1s ease-out 0.7s,
      transform 2s ease-out 0.7s;
  }

  @media (prefers-reduced-motion: reduce) {
    .bg,
    .bg.visible {
      transform: none;
      transition: opacity 0.4s ease;
    }
  }

  .page-wrapper::after {
    content: "";
    background: linear-gradient(
      180deg,
      rgba(1, 1, 68, 0.877) 0%,
      rgba(8, 8, 10, 0.4) 40%,
      rgba(0, 0, 0, 0.575) 70%,
      rgba(8, 8, 10, 0.65) 100%
    );
  }

  /* HEADER */
  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: clamp(0.75rem, 3vh, 2rem) 1.5rem 0.5rem;
  }

  /* the logo is used as a mask over a solid colour, so any colour works */
  .logo-link {
    display: block;
    background-color: var(--text-color);
    mask: var(--logo) center / contain no-repeat;
    -webkit-mask: var(--logo) center / contain no-repeat;
  }

  .logo {
    height: clamp(56px, 12vh, 110px);
    width: auto;
    display: block;
    visibility: hidden; /* only keeps the size; the mask draws the logo */
  }

  nav {
    width: min(34rem, 90%);
    margin: 0 auto;
  }

  nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;
    padding: 0.5rem 1rem 0.75rem;
    list-style: none;
    margin: 0;
  }

  nav a {
    font-size: 0.8125rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid transparent;
    text-decoration: none;
    color: var(--text-color);
    display: block;
    transition:
      color 0.2s ease,
      border-color 0.2s ease;
  }

  nav a:hover {
    color: var(--accent);
  }

  nav a.active {
    border-bottom-color: var(--accent);
    color: var(--accent);
  }

  /* MAIN */
  main {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: clamp(1.25rem, 4vh, 3.5rem) 1.5rem;
    width: 100%;
    overflow: hidden;
  }

  /* FOOTER */
  footer {
    width: min(34rem, 90%);
    margin: 0 auto;
    padding: 0.875rem 1.5rem;
    text-align: center;
    font-size: 0.75rem;
    letter-spacing: 0.25em;
    color: var(--text-color);
  }
</style>
