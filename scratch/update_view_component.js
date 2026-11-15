const fs = require('fs');

let file = fs.readFileSync('src/components/views/MondayAgentStudioClonedView.tsx', 'utf8');

// 1. Remove const [mounted, setMounted] = useState(false); and useEffect(() => setMounted(true), []);
file = file.replace(
  /export default function MondayAgentStudioClonedView\(\)\s*\{[\s\S]*?const \[modalOpen, setModalOpen\]/,
  `export default function MondayAgentStudioClonedView() {
  const [modalOpen, setModalOpen]`
);

// 2. Remove the premature if (!mounted) return ...
file = file.replace(
  /\s*if \(!mounted\) \{[\s\S]*?return \(\s*<div className="min-h-screen[\s\S]*?<\/div>\s*\);\s*\}/,
  ''
);

// 3. Update the useEffect logic to load scripts directly and reliably
const oldUseEffectStart = file.indexOf('// Initialize interactive components');
const oldUseEffectEnd = file.indexOf('return (\n    <div\n      className="percipere-agent-studio-wrapper');

if (oldUseEffectStart === -1 || oldUseEffectEnd === -1) {
  console.error('Could not locate useEffect region');
  process.exit(1);
}

const newUseEffect = `// Initialize interactive components
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Helper to ensure scripts load reliably
    const loadScript = (src: string, globalKey: string): Promise<any> => {
      return new Promise((resolve) => {
        if (typeof window !== "undefined" && (window as any)[globalKey]) {
          resolve((window as any)[globalKey]);
          return;
        }
        let script = document.querySelector(\`script[data-src="\${src}"]\`) as HTMLScriptElement;
        if (!script) {
          script = document.createElement("script");
          script.src = src;
          script.setAttribute("data-src", src);
          script.async = false;
          document.head.appendChild(script);
        }
        script.addEventListener("load", () => {
          resolve((window as any)[globalKey]);
        });
        const poll = setInterval(() => {
          if ((window as any)[globalKey]) {
            clearInterval(poll);
            resolve((window as any)[globalKey]);
          }
        }, 50);
        setTimeout(() => {
          clearInterval(poll);
          resolve((window as any)[globalKey]);
        }, 4000);
      });
    };

    // 1. Interactive Tab Switching for all Webflow Tab components
    const handleTabClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(".w-tab-link");
      if (!target) return;

      e.preventDefault();
      const tabTarget = target.getAttribute("data-w-tab");
      if (!tabTarget) return;

      const tabsParent = target.closest(".w-tabs");
      if (!tabsParent) return;

      const links = tabsParent.querySelectorAll(".w-tab-link");
      links.forEach((link) => {
        link.classList.remove("w--current");
        link.setAttribute("aria-selected", "false");
        link.setAttribute("tabindex", "-1");
      });
      target.classList.add("w--current");
      target.setAttribute("aria-selected", "true");
      target.setAttribute("tabindex", "0");

      const panes = tabsParent.querySelectorAll(".w-tab-pane");
      panes.forEach((pane) => {
        if (pane.getAttribute("data-w-tab") === tabTarget) {
          pane.classList.add("w--tab-active");
        } else {
          pane.classList.remove("w--tab-active");
        }
      });
    };

    container.addEventListener("click", handleTabClick);

    // 2. CTA Click Handler to open modal
    const handleCtaClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a[href='#contact']");
      if (target) {
        e.preventDefault();
        setModalOpen(true);
      }
    };

    container.addEventListener("click", handleCtaClick);

    // 3. Initialize Swiper 3D Coverflow Carousel
    const initSwiper = (SwiperClass: any) => {
      if (!SwiperClass || swiperInstanceRef.current) return;

      const swiperEl = container.querySelector(".agents-carousel");
      if (!swiperEl) return;

      try {
        swiperInstanceRef.current = new SwiperClass(swiperEl, {
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          loop: true,
          watchSlidesProgress: true,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 270,
            modifier: 1,
            slideShadows: false,
          },
          autoplay: {
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          },
          speed: 600,
          slideToClickedSlide: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          on: {
            slideChange: function (this: any) {
              const activeSlide = this.slides[this.activeIndex];
              if (!activeSlide) return;

              container.querySelectorAll("video.ai-vid-tar").forEach((v: any) => {
                v.pause();
                v.currentTime = 0;
              });

              const activeVideo = activeSlide.querySelector("video.ai-vid-tar");
              if (activeVideo) {
                activeVideo.play().catch(() => {});
              }
            },
          },
        });

        if (swiperInstanceRef.current && swiperInstanceRef.current.update) {
          swiperInstanceRef.current.update();
        }
      } catch (err) {
        console.warn("Swiper init notice:", err);
      }
    };

    // 4. GSAP Avatar Animation
    const initAvatars = (gsap: any, ScrollTrigger: any) => {
      if (!gsap || !ScrollTrigger) return;
      try {
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
          const avatars = gsap.utils.toArray(".agen-avatar");
          if (!avatars.length) return;
          const mid = 6;
          const innerGap = 85;
          const outerGap = 55;

          gsap.set(avatars, {
            position: "absolute",
            left: "50%",
            top: "50%",
            yPercent: -50,
            xPercent: -50,
            x: 0,
          });

          gsap.to(avatars, {
            x: (i: number) => {
              const diff = i - mid;
              if (diff === 0) return 0;
              const absDiff = Math.abs(diff);
              const direction = diff > 0 ? 1 : -1;
              if (absDiff <= 2) {
                return direction * (absDiff * innerGap);
              } else {
                return direction * (2 * innerGap + (absDiff - 2) * outerGap);
              }
            },
            scrollTrigger: {
              trigger: container.querySelector(".agents_avatars-wrapper"),
              start: "top 85%",
              end: "+=240",
              scrub: 0.2,
              fastScrollEnd: true,
              onLeave: (self: any) => self.animation && self.animation.progress(1),
            },
          });
        });
      } catch (err) {
        console.warn("GSAP avatar notice:", err);
      }
    };

    // 5. GSAP Stacking Cards Animation for Enterprise Agents Scroll Stack
    const initStackCards = (gsap: any, ScrollTrigger: any) => {
      if (!gsap || !ScrollTrigger) return;
      try {
        const stackCards = container.querySelectorAll(".percipere-scroll-stack .agents_readymade-card");
        if (!stackCards.length) return;

        stackCards.forEach((card: any, idx: number) => {
          if (idx < stackCards.length - 1) {
            const nextCard = stackCards[idx + 1];
            gsap.to(card, {
              scale: 0.94 - (stackCards.length - 1 - idx) * 0.015,
              opacity: 0.88,
              scrollTrigger: {
                trigger: nextCard,
                start: "top 250px",
                end: "top 120px",
                scrub: true,
              },
            });
          }
        });
      } catch (err) {
        console.warn("Stack cards notice:", err);
      }
    };

    // Load libraries directly and initialize
    loadScript("/vendor/swiper-bundle.min.js", "Swiper").then((SwiperClass) => {
      if (SwiperClass) {
        initSwiper(SwiperClass);
      }
    });

    loadScript("/vendor/gsap.min.js", "gsap").then((gsapClass) => {
      loadScript("/vendor/ScrollTrigger.min.js", "ScrollTrigger").then((ScrollTriggerClass) => {
        if (gsapClass && ScrollTriggerClass) {
          initAvatars(gsapClass, ScrollTriggerClass);
          initStackCards(gsapClass, ScrollTriggerClass);
        }
      });
    });

    return () => {
      container.removeEventListener("click", handleTabClick);
      container.removeEventListener("click", handleCtaClick);
      if (swiperInstanceRef.current && swiperInstanceRef.current.destroy) {
        swiperInstanceRef.current.destroy(true, true);
        swiperInstanceRef.current = null;
      }
    };
  }, []);

  `;

file = file.substring(0, oldUseEffectStart) + newUseEffect + file.substring(oldUseEffectEnd);

fs.writeFileSync('src/components/views/MondayAgentStudioClonedView.tsx', file, 'utf8');
console.log('Successfully updated MondayAgentStudioClonedView.tsx!');
