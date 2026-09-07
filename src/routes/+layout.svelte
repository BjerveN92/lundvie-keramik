<script lang="ts">
  import { page } from "$app/state";
  import logo from "$lib/assets/lundvie_keramik_logo.png";
  import bgPhoto from "$lib/assets/bkrnd_1.jpg";
  let { children } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Cormorant+Garamond:wght@400;500&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="page-wrapper" style="--bg-photo: url({bgPhoto});">
  <header>
    <div class="logo-wrapper">
      <a href="/" class="logo-link">
        <img src={logo} alt="Lundvie Keramik" class="logo" />
      </a>
    </div>
    <nav>
      <ul>
        <li><a href="/" class:active={page.url.pathname === "/"}>Home</a></li>
        <li>
          <a href="/about" class:active={page.url.pathname === "/about"}
            >About</a
          >
        </li>
        <li>
          <a href="/pictures" class:active={page.url.pathname === "/pictures"}
            >Images</a
          >
        </li>
        <li>
          <a href="/kontakt" class:active={page.url.pathname === "/kontakt"}
            >Contact</a
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
    --color-beige: #f1ead9;
    --color-beige-dark: #e3d9bf;
    --color-black: #0a0a0a;
    --color-white: #ffffff;

    /* text over photo — kept consistent everywhere so any background
       photo can be dropped in without the content "skära sig" */
    --text-color: #f8f6f1;
    --text-shadow-soft: 0 1px 4px rgba(0, 0, 0, 0.4);
    --text-shadow-strong: 0 2px 16px rgba(0, 0, 0, 0.55);

    /* shared glass system for header / nav / footer / content panels */
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-bg-strong: rgba(255, 255, 255, 0.18);
    --glass-border: rgba(255, 255, 255, 0.32);
    --glass-blur: blur(16px);
    --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.28);
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
    font-family: "Cormorant Garamond", Georgia, serif;
    background-color: var(--color-black);
    color: var(--text-color);
    margin: 0;
  }

  /* GLOBAL TYPOGRAPHY */
  :global(h1) {
    font-weight: 700;
    line-height: 1.2;
  }

  :global(p) {
    font-weight: 700;
    line-height: 1.6;
  }

  .page-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
    isolation: isolate;
  }

  /* full-bleed background photo + a dark scrim so white text/UI stays
     legible no matter which photo ends up behind it */
  .page-wrapper::before,
  .page-wrapper::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  .page-wrapper::before {
    background-image: var(--bg-photo);
    background-size: cover;
    background-position: center;
  }

  .page-wrapper::after {
    background: linear-gradient(
      180deg,
      rgba(8, 8, 10, 0.55) 0%,
      rgba(8, 8, 10, 0.18) 28%,
      rgba(8, 8, 10, 0.18) 72%,
      rgba(8, 8, 10, 0.6) 100%
    );
  }

  /* HEADER */
  header {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur) saturate(140%);
    -webkit-backdrop-filter: var(--glass-blur) saturate(140%);
    border-bottom: 1px solid var(--glass-border);
  }

  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: clamp(1rem, 3vh, 2.25rem) 1.5rem;
  }

  .logo-link {
    display: block;
  }

  .logo {
    height: clamp(3rem, 7vh, 7rem);
    width: auto;
    display: block;
    /* faintly white-tinted logo so it still reads against a busy photo */
    filter: brightness(0) invert(1)
      drop-shadow(0 2px 10px rgba(0, 0, 0, 0.45));
    opacity: 0.88;
  }

  nav {
    border-top: 1px solid var(--glass-border);
  }

  nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    list-style: none;
    margin: 0;
  }

  nav a {
    font-size: 1.0625rem;
    letter-spacing: 0.03em;
    padding: 0.5rem 1.5rem;
    border: 1px solid transparent;
    border-radius: 999px;
    text-decoration: none;
    color: var(--text-color);
    text-shadow: var(--text-shadow-soft);
    display: block;
    transition:
      border-color 0.2s ease,
      background-color 0.2s ease;
  }

  nav a:hover,
  nav a.active {
    border-color: var(--glass-border);
    background: var(--glass-bg-strong);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
  }

  /* MAIN */
  main {
    position: relative;
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: clamp(1.25rem, 4vh, 4rem) 1.5rem;
    max-width: 64rem;
    margin: 0 auto;
    width: 100%;
    /* safety net: if a page's content is ever taller than the viewport,
       it scrolls inside main rather than the whole site scrolling */
    overflow-y: auto;
  }

  /* FOOTER */
  footer {
    border-top: 1px solid var(--glass-border);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    padding: 1rem 1.5rem;
    text-align: center;
    font-size: 0.8125rem;
    letter-spacing: 0.15em;
    color: var(--text-color);
    text-shadow: var(--text-shadow-soft);
  }
</style>
