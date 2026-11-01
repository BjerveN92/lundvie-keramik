<script>
  import { page } from "$app/state";
</script>

<nav>
  <a href="/" class:active={page.url.pathname === "/"}>Hem</a>
  <a href="/about" class:active={page.url.pathname === "/about"}>Om</a>
  <a href="/kontakt" class:active={page.url.pathname === "/kontakt"}>Kontakt</a>
  <a href="/pictures" class:active={page.url.pathname === "/pictures"}>Bilder</a
  >
</nav>

<style>
  nav {
    display: flex;
    gap: 2rem;
    padding: 1rem;
    background: #1a1a2e;
  }

  a {
    color: #ccc;
    text-decoration: none;
  }

  a.active {
    color: white;
    font-weight: bold;
  }
</style>
