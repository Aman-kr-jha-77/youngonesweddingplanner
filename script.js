
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".hero-content h1, .hero-content p, .hero-cta-group", { opacity: 0, y: 30 });
    gsap.to(".hero-content h1", { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" });
    gsap.to(".hero-content p", { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power2.out" });
    gsap.to(".hero-cta-group", { opacity: 1, y: 0, duration: 1, delay: 0.7, ease: "power2.out" });

    gsap.utils.toArray(".section-label").forEach((label) => {
      gsap.from(label, {
        scrollTrigger: {
          trigger: label,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: "power2.out"
      });
    });

    gsap.utils.toArray("h2").forEach((heading) => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out"
      });
    });

    gsap.utils.toArray(".split > div").forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        x: index % 2 === 0 ? -40 : 40,
        duration: 0.9,
        ease: "power2.out"
      });
    });

    gsap.utils.toArray(".service-card").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        delay: index * 0.08,
        ease: "power2.out"
      });
    });

    gsap.utils.toArray(".why-card").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        delay: index * 0.1,
        ease: "back.out(1.3)"
      });
    });

    gsap.from(".metric-card", {
      scrollTrigger: {
        trigger: ".experience-grid",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    });

    gsap.utils.toArray(".gallery-grid img").forEach((img, index) => {
      gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: "top 90%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        scale: 0.85,
        duration: 0.7,
        delay: index * 0.06,
        ease: "power2.out"
      });
    });

    gsap.utils.toArray(".testimonial-card").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: index * 0.15,
        ease: "power2.out"
      });
    });

    // gsap.from(".message-title", {
    //   scrollTrigger: {
    //     trigger: ".message-title",
    //     start: "top 80%",
    //     toggleActions: "play none none none"
    //   },
    //   opacity: 0,
    //   y: 30,
    //   duration: 1,
    //   ease: "power2.out"
    // });

    // gsap.from(".message-subtitle", {
    //   scrollTrigger: {
    //     trigger: ".message-subtitle",
    //     start: "top 85%",
    //     toggleActions: "play none none none"
    //   },
    //   opacity: 0,
    //   y: 25,
    //   duration: 1,
    //   delay: 0.2,
    //   ease: "power2.out"
    // });

    // gsap.from(".cta-content h2", {
    //   scrollTrigger: {
    //     trigger: ".cta-content",
    //     start: "top 80%",
    //     toggleActions: "play none none none",
        
    //   },
    //   opacity:1,
    //   scale: 0.9,
    //   duration: 0.9,
    //   ease: "back.out(1.5)"
    // });

    // gsap.from(".cta-buttons .btn", {
    //   scrollTrigger: {
    //     trigger: ".cta-buttons",
    //     start: "top 85%",
    //     toggleActions: "play none none none"
    //   },
    //   opacity: 0,
    //   y: 20,
    //   stagger: 0.15,
    //   duration: 0.7,
    //   ease: "power2.out"
    // });

    // gsap.from(".social-icons a", {
    //   scrollTrigger: {
    //     trigger: ".social-icons",
    //     start: "top 90%",
    //     toggleActions: "play none none none"
    //   },
    //   opacity: 0,
    //   scale: 0,
    //   stagger: 0.1,
    //   duration: 0.5,
    //   ease: "back.out(1.7)"
    // });

    // gsap.set(".floating-action", { scale: 0, opacity: 0 });
    // gsap.to(".floating-call", { scale: 1, opacity: 1, duration: 0.6, delay: 1.5, ease: "back.out(1.7)" });
    // gsap.to(".floating-whatsapp", { scale: 1, opacity: 1, duration: 0.6, delay: 1.7, ease: "back.out(1.7)" });

    const menuToggle = document.querySelector(".menu-toggle");
    const primaryNav = document.querySelector(".primary-nav");

    if (menuToggle && primaryNav) {
      const closeMenu = () => {
        primaryNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
      };

      menuToggle.addEventListener("click", () => {
        const isOpen = primaryNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
          "aria-label",
          isOpen ? "Close navigation menu" : "Open navigation menu"
        );
      });

      primaryNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          closeMenu();
        });
      });

      document.addEventListener("click", (event) => {
        if (!primaryNav.classList.contains("open")) return;
        if (primaryNav.contains(event.target) || menuToggle.contains(event.target)) return;
        closeMenu();
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && primaryNav.classList.contains("open")) {
          closeMenu();
          menuToggle.focus();
        }
      });

      const mobileQuery = window.matchMedia("(max-width: 680px)");
      const handleViewportChange = (query) => {
        if (!query.matches) closeMenu();
      };
      handleViewportChange(mobileQuery);
      mobileQuery.addEventListener("change", handleViewportChange);
    }


    const backdropImages = document.querySelectorAll(".backIM img, .message-backdrop img");
    if (backdropImages.length) {
      const toggleBackdropImages = () => {
        const showImages = window.scrollY > 100;
        backdropImages.forEach((img) => {
          img.style.display = showImages ? "block" : "none";
        });
      };

      toggleBackdropImages();
      window.addEventListener("scroll", toggleBackdropImages, { passive: true });
    }
    const metricCounters = document.querySelectorAll(".metric-counter");
    if (metricCounters.length) {
      const runCounter = (counter) => {
        const target = Number(counter.dataset.target || 0);
        const suffix = counter.dataset.suffix || "";
        const duration = 1200;
        const startTime = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const value = Math.floor(progress * target);
          counter.textContent = `${value}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      };

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const counter = entry.target;
              if (!counter.dataset.animated) {
                counter.dataset.animated = "true";
                runCounter(counter);
              }
              obs.unobserve(counter);
            }
          });
        },
        { threshold: 0.5 }
      );

      metricCounters.forEach((counter) => observer.observe(counter));
    }
  
