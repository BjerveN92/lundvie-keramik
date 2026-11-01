<script lang="ts">
  import { page } from "$app/state";
  import logo from "$lib/assets/lundvie_keramik_logo.png";
  import bgPhoto from "$lib/assets/Messenger_creation_8FD094FB-71F8-470E-B830-5E8A95A3793A.jpeg";
  import "@fontsource-variable/josefin-sans";
  import "@fontsource-variable/josefin-sans/wght-italic.css";
  let { children } = $props();
</script>

<div class="page-wrapper" style="--bg-photo: url({bgPhoto});">
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
    --color-beige: #050402;
    --color-beige-dark: #ccbb90;
    --color-black: #0a0a0a;
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
    text-shadow: var(--text-shadow);
  }

  /* full-bleed background photo + a dark scrim */
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
