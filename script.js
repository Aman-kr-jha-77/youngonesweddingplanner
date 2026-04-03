// ─── Custom Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animRing);
})();

// ─── Page Navigation
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === name);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Close mobile menu
  document.getElementById('navLinks').classList.remove('mobile-open');
  document.getElementById('hamburger').classList.remove('open');
  return false;
}

// ─── Mobile Menu
function toggleMobileMenu() {
  const nav = document.getElementById('navLinks');
  const btn = document.getElementById('hamburger');
  nav.classList.toggle('mobile-open');
  btn.classList.toggle('open');
}

// ─── Sticky Nav Shadow
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// trust section
let started = false;

function animateCounter(el, target, suffix = "") {
  let current = 0;
  const duration = 5000; // total animation time
  const increment = target / (duration / 16); // 60fps approx

  function update() {
    current += increment;
    if (current >= target) {
      el.textContent = target + suffix;
    } else {
      el.textContent = Math.floor(current) + suffix;
      requestAnimationFrame(update);
    }
  }

  update();
}

function startCounters() {
  const counters = document.querySelectorAll(".trust-num");

  counters.forEach((counter) => {
    let text = counter.textContent.trim();

    let suffix = "";
    let number = text;

    // detect suffix
    if (text.includes("+")) {
      suffix = "+";
      number = text.replace("+", "");
    } else if (text.includes("%")) {
      suffix = "%";
      number = text.replace("%", "");
    }

    animateCounter(counter, parseInt(number), suffix);
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 50 && !started) {
    started = true;
    startCounters();
  }
});

// float btn
const phoneBtn = document.querySelector(".float-call");

function triggerVibration() {
  phoneBtn.classList.add("vibrate");

  // remove class after animation ends so it can re-trigger
  setTimeout(() => {
    phoneBtn.classList.remove("vibrate");
  }, 800);
}

// run every 8 seconds
setInterval(triggerVibration, 4000);

// ─── Gallery Filter
function filterGallery(btn, cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#galleryGrid .gi').forEach(item => {
    const show = cat === 'all' || item.dataset.cat === cat;
    item.style.display = show ? 'block' : 'none';
  });
}

// ─── Contact Form
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type=submit]');
  const originalBtnHtml = btn.innerHTML;

  btn.textContent = 'Sending...';
  btn.disabled = true;

  // 1. Send the Admin Notification (To You)
  const sendToAdmin = emailjs.sendForm('submittedToAman', 'template_mbyfmsp', form);

  // 2. Send the Auto-Reply (To Customer)
  const sendToCustomer = emailjs.sendForm('submittedToAman', 'template_1c2ivo7', form);

  // Wait for both to finish
  Promise.all([sendToAdmin, sendToCustomer])
    .then(() => {
      document.getElementById('formSuccess').style.display = 'block';
      btn.textContent = '✓ Sent!';
      form.reset();

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalBtnHtml;
        document.getElementById('formSuccess').style.display = 'none';
      }, 4000);
    })
    .catch((error) => {
      alert("Something went wrong. Please check your connection.");
      btn.disabled = false;
      btn.innerHTML = originalBtnHtml;
      console.error("Error:", error);
    });
}

// ─── Intersection Observer Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.why-card, .tcard, .service-card, .value-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ─── EmailJS Init
// Replace 'YOUR_PUBLIC_KEY' with the key from your EmailJS Account
(function () {
  emailjs.init("JkdoddudhHoOVa9rX");
})();
