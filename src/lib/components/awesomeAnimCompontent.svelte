<script>
</script>

<article>
  <h1>LUNDVIE KERAMIK</h1>
  <p>this should be fucking awesome</p>
</article>

<style>
  /*
  these type the CSS variable as color
  unlocking the ability for the browser
  to animate just that portion
*/
  @property --color-1 {
    syntax: "<color>";
    inherits: false;
    initial-value: hsl(0, 0%, 100%);
  }

  @property --color-2 {
    syntax: "<color>";
    inherits: false;
    initial-value: #e02a09;
  }

  /* keyframes that change the color variable */
  @keyframes gradient-change {
    to {
      --color-1: #ddec00;
      --color-2: hsl(236, 77%, 42%);
    }
  }

  article {
    /* apply variable changes over time */
    animation: gradient-change 1.5s linear infinite alternate;

    background: repeating-linear-gradient(
      45deg,
      var(--color-1) 0px,
      var(--color-2) 20px
    );

    /* old browser support */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    /* modern browser version */
    background-clip: text;
    color: transparent;
  }

  @layer demo.support {
    h1 {
      font-size: 10vmin;
      line-height: 1.1;
      font-family: "Orbitron", sans-serif;
      letter-spacing: 0.1em;
    }

    h1,
    p {
      margin: 0;
      text-wrap: balance;
    }

    h1 {
      line-height: 1.25cap;
    }

    p {
      font-family: "Space Mono", monospace;
    }

    article {
      display: grid;
      gap: 1lh;
      text-align: center;
    }
  }
</style>
