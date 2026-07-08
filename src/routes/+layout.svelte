<script lang="ts">
  import { page } from '$app/state';
  let { children } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Cormorant+Garamond:wght@400;500&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="page-wrapper">
  <header>
    <div class="logo-wrapper">
      <h1 class="logo">KERAMIK &amp; CO</h1>
    </div>
    <nav>
      <ul>
        <li><a href="/" class:active={page.url.pathname === '/'}>Home</a></li>
        <li><a href="/about" class:active={page.url.pathname === '/about'}>About</a></li>
        <li><a href="/pictures" class:active={page.url.pathname === '/pictures'}>Images</a></li>
        <li><a href="/kontakt" class:active={page.url.pathname === '/kontakt'}>Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    {@render children()}
  </main>

  <footer>
    © 2026 KERAMIK &amp; CO
  </footer>
</div>

<style>
  :global(:root) {
    --color-beige: #f1ead9;
    --color-beige-dark: #e3d9bf;
    --color-black: #1a1a1a;
    --color-white: #ffffff;
  }

  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }

  :global(body) {
    font-family: 'Cormorant Garamond', Georgia, serif;
    background-color: var(--color-beige);
    color: var(--color-black);
    margin: 0;
    min-height: 100vh;
  }

  .page-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  /* HEADER */
  header {
    border-bottom: 1px solid var(--color-black);
    background-color: var(--color-beige);
  }

  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 1.5rem;
  }

  .logo {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(2.5rem, 6vw, 3.75rem);
    letter-spacing: 0.15em;
    font-weight: 400;
    margin: 0;
  }

  nav {
    border-top: 1px solid var(--color-black);
  }

  nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
    list-style: none;
    margin: 0;
  }

  nav a {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.125rem;
    padding: 0.5rem 1.5rem;
    border: 1px solid transparent;
    text-decoration: none;
    color: var(--color-black);
    display: block;
    transition: border-color 0.15s ease;
  }

  nav a:hover,
  nav a.active {
    border-color: var(--color-black);
  }

  /* MAIN */
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 1.5rem;
    max-width: 64rem;
    margin: 0 auto;
    width: 100%;
  }

  /* FOOTER */
  footer {
    border-top: 1px solid var(--color-black);
    padding: 1.5rem;
    text-align: center;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.875rem;
    letter-spacing: 0.15em;
  }
</style>
