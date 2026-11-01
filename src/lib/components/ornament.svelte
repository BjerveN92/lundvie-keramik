<!-- Divider: a straight shelf with a plate, a candlestick (with a flickering
     candle), a pitcher and a cup. Everything draws itself in on load. Then, in
     an endless loop, the pitcher tips forward, pours into the cup for about two
     seconds and tips back again. -->
<svg class="ornament" viewBox="0 0 290 64" aria-hidden="true">
  <!-- shelf -->
  <path class="draw" pathLength="1" d="M8 58 H282" />

  <!-- plate, seen face-on -->
  <g class="item i1">
    <path class="draw vase-line" pathLength="1" d={plate} />
    <path class="draw vase-line" pathLength="1" d={plateInner} />
    <path class="draw vase-line" pathLength="1" d={plateStar} />
    <circle class="plate-dots" cx="60" cy="42" r="13.2" />
  </g>

  <!-- bowl -->
  <g class="item i5" transform="translate(2 0)">
    <path class="draw vase-line" pathLength="1" d={bowl} />
    <path class="draw vase-line" pathLength="1" d={bowlBand} />
  </g>

  <!-- candlestick + candle (static, only the flame moves) -->
  <g class="item" transform="translate(-8 0)">
    <path class="vase-line" d={stick} />
    <path class="vase-line" d={candle} />
    <path class="flame" d={flame} />
  </g>

  <!-- pitcher: tips forward around its foot -->
  <g transform="translate(95 18)">
    <g class="pitcher">
      <path class="draw vase-line i3" pathLength="1" d={body} />
      <path class="draw vase-line i3" pathLength="1" d={handle} />
      <path class="draw vase-line i3" pathLength="1" d={groove} />
    </g>
    <path class="stream" pathLength="1" d={streamPath} />
    <path class="flow" pathLength="1" d={streamPath} />
  </g>

  <!-- cup -->
  <g class="item i4">
    <path class="draw vase-line" pathLength="1" d={cup} />
    <path class="draw vase-line" pathLength="1" d={cupHandle} />
  </g>
  <path class="liquid" d="M235 54 H247" />
  <ellipse class="ripple" cx="241" cy="47.5" rx="3" ry="0.9" />
</svg>

<script lang="ts" module>
  const plate =
    "M44 42 a16 16 0 1 0 32 0 a16 16 0 1 0 -32 0";
  const plateInner = "M49.5 42 a10.5 10.5 0 1 0 21 0 a10.5 10.5 0 1 0 -21 0";
  // little 12-ray flower in the middle of the plate
  const plateStar = Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI) / 6;
    const p = (r: number) =>
      `${(60 + r * Math.cos(a)).toFixed(2)} ${(42 + r * Math.sin(a)).toFixed(2)}`;
    return `M${p(2.5)} L${p(i % 2 ? 6 : 8)}`;
  }).join(" ");

  const bowl = "M126 44 H154 C154 53 148 58 140 58 C132 58 126 53 126 44";
  const bowlBand = "M127.5 48.5 C135 51 145 51 152.5 48.5";

  const stick =
    "M100 58 C100 55 104 54 110 54 C116 54 120 55 120 58 M108 54 C108 50 106 48 108 45 C109 43 108 42 107 40 H113 C112 42 111 43 112 45 C114 48 112 50 112 54";
  const candle = "M108.5 40 V27 H111.5 V40 M110 27 V25";
  const flame = "M110 13 C113.5 18 113.5 23 110 24 C106.5 23 106.5 18 110 13 Z";

  // upright pitcher with a spout on the right and the foot at y=40
  const body =
    "M92 40 H112 M92 40 C84 38 82 30 86 22 C88 17 90 14 90 10 H112 C115 9 119 8 123 6 M112 40 C118 38 120 31 118 24 C117 19 114 16 114 12 L112 10";
  const handle = "M87 16 C74 14 72 32 84 33";
  const groove = "M87 24 C93 27 109 27 117 24";

  // from the tilted spout tip down into the cup (pitcher group is shifted 95,18)
  const streamPath = "M136 13 C143 14 146 20 146 29";

  const cup =
    "M232 46 H250 C250 54 247 58 241 58 C235 58 232 54 232 46";
  const cupHandle = "M250 48 C256 48 256 54 249.5 54";
</script>

<style>
  .ornament {
    display: block;
    width: min(20rem, 85%);
    height: auto;
    margin: 1rem auto;
    overflow: visible;
    color: var(--accent);
    fill: none;
    stroke: var(--line);
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .vase-line,
  .stream {
    stroke: var(--accent);
  }

  .draw {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: draw 1.4s cubic-bezier(0.55, 0, 0.2, 1) 0.2s forwards;
  }

  .i1 .draw {
    animation-delay: 0.1s;
  }
  .i5 .draw {
    animation-delay: 0.4s;
  }

  .plate-dots {
    stroke: var(--accent);
    stroke-width: 1;
    stroke-dasharray: 0.1 2.6;
    opacity: 0;
    animation: fade-in 0.8s ease-out 1.2s forwards;
  }
  .i3 {
    animation-delay: 0.5s;
  }
  .i4 .draw {
    animation-delay: 0.7s;
  }

  /* --- candle ------------------------------------------------------- */
  .flame {
    fill: var(--accent);
    stroke: none;
    opacity: 0;
    transform-origin: 110px 24px;
    animation:
      fade-in 0.6s ease-out 1.6s forwards,
      flicker 1.7s ease-in-out 1.6s infinite alternate;
  }

  /* --- pouring: one 8s loop, ~2s of actual pouring ------------------- */
  .pitcher {
    transform-origin: 101px 40px;
    animation: tilt 8s ease-in-out 2.2s infinite;
  }

  .stream {
    stroke-width: 1.6;
    stroke-dasharray: 1 2;
    stroke-dashoffset: 1;
    opacity: 0;
    animation: pour 8s linear 2.2s infinite;
  }

  /* moving dashes over the stream make it look like it is running */
  .flow {
    stroke: var(--line);
    stroke-width: 0.8;
    stroke-dasharray: 0.05 0.12;
    opacity: 0;
    animation:
      flow-vis 8s linear 2.2s infinite,
      flow 0.9s linear 2.2s infinite;
  }

  .liquid {
    stroke: var(--accent);
    stroke-width: 1.2;
    opacity: 0;
    animation: fill 8s ease-in-out 2.2s infinite;
  }

  .ripple {
    stroke: var(--accent);
    stroke-width: 0.8;
    opacity: 0;
    transform-origin: 241px 47.5px;
    animation: ripple 8s ease-out 2.2s infinite;
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }

  @keyframes flicker {
    0% {
      transform: scale(1, 1) rotate(0deg);
    }
    30% {
      transform: scale(0.92, 1.08) rotate(-2deg);
    }
    60% {
      transform: scale(1.04, 0.95) rotate(1.5deg);
    }
    100% {
      transform: scale(0.95, 1.05) rotate(-1deg);
    }
  }

  @keyframes tilt {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    10%,
    35% {
      transform: translate(0, -8px) rotate(28deg);
    }
    45%,
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  @keyframes pour {
    0%,
    9% {
      stroke-dashoffset: 1;
      opacity: 0;
    }
    10% {
      stroke-dashoffset: 1;
      opacity: 1;
    }
    15% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
    35% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
    39% {
      stroke-dashoffset: -1;
      opacity: 1;
    }
    40%,
    100% {
      stroke-dashoffset: -1;
      opacity: 0;
    }
  }

  @keyframes flow-vis {
    0%,
    14% {
      opacity: 0;
    }
    16%,
    34% {
      opacity: 1;
    }
    37%,
    100% {
      opacity: 0;
    }
  }

  @keyframes flow {
    to {
      stroke-dashoffset: -0.17;
    }
  }

  @keyframes fill {
    0%,
    13% {
      transform: translateY(0);
      opacity: 0;
    }
    16% {
      transform: translateY(0);
      opacity: 1;
    }
    36% {
      transform: translateY(-5px);
      opacity: 1;
    }
    50% {
      transform: translateY(-5px);
      opacity: 1;
    }
    58%,
    100% {
      transform: translateY(-5px);
      opacity: 0;
    }
  }

  @keyframes ripple {
    0%,
    14% {
      transform: scale(0.5);
      opacity: 0;
    }
    17% {
      opacity: 0.8;
    }
    24% {
      transform: scale(2.6);
      opacity: 0;
    }
    25% {
      transform: scale(0.5);
      opacity: 0;
    }
    28% {
      opacity: 0.8;
    }
    35% {
      transform: scale(2.6);
      opacity: 0;
    }
    100% {
      transform: scale(2.6);
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .draw {
      animation: none;
      stroke-dashoffset: 0;
    }

    .pitcher,
    .stream,
    .flow,
    .liquid,
    .ripple {
      animation: none;
    }

    .flame {
      animation: none;
      opacity: 1;
    }

    .plate-dots {
      animation: none;
      opacity: 1;
    }

    .flow,
    .ripple {
      display: none;
    }
  }
</style>
