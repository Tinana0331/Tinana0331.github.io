gsap.registerPlugin(ScrollTrigger);

// 塑膠粒子掉落
const particleContainer = document.getElementById("particle-container");
for (let i = 0; i < 50; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "vw";
  particle.style.animationDelay = Math.random() * 2 + "s";
  particleContainer.appendChild(particle);
}

// 動態生成粒子 CSS
document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
    .particle {
      position: absolute;
      top: 0;
      width: 8px;
      height: 8px;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      animation: particle-fall 5s linear infinite;
    }
    @keyframes particle-fall {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(100vh); opacity: 0; }
    }
  </style>`
);

// 第一批：海洋生物
gsap.to("#marine-animals .parallax-item", {
  scrollTrigger: {
    trigger: "#div4",
    start: "top 70%",
    end: "top 30%",
    scrub: true,
  },
  opacity: 1,
  y: -50,
  stagger: 0.5, // 增加延遲感
});

// 第二批：塑膠垃圾沈入海洋
gsap.to("#plastic-waste", {
  scrollTrigger: {
    trigger: "#div4",
    start: "top 50%",
    end: "bottom 10%",
    scrub: true,
  },
  opacity: 1,
  y: 150,
  stagger: 0.7,
});

// 最後：文字註解
gsap.to("#annotations", {
  scrollTrigger: {
    trigger: "#div4",
    start: "bottom 20%",
    end: "bottom 0%",
    scrub: true,
  },
  opacity: 1,
});

