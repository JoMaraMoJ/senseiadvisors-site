(() => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
      document.body.classList.toggle('menu-open', !open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
    }));
  }

  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  } else {
    items.forEach((item) => item.classList.add('is-visible'));
  }

  const inquiryForm = document.querySelector('form[name="sensei-inquiry"]');
  const formStatus = inquiryForm?.querySelector('.form-status');
  const submitButton = inquiryForm?.querySelector('.form-submit');

  if (inquiryForm && formStatus && submitButton) {
    inquiryForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      formStatus.hidden = true;
      formStatus.className = 'form-status';
      const originalLabel = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Sending…';

      try {
        const formData = new FormData(inquiryForm);
        const body = new URLSearchParams();
        for (const [key, value] of formData.entries()) body.append(key, String(value));

        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString()
        });

        if (!response.ok) throw new Error(`Submission failed: ${response.status}`);

        inquiryForm.reset();
        formStatus.textContent = 'Thank you. Your inquiry has been sent to Sensei Advisors. I’ll follow up soon.';
        formStatus.classList.add('success');
        formStatus.hidden = false;
      } catch (error) {
        formStatus.innerHTML = 'The form could not be sent. Please email <a href="mailto:jomar@senseiadvisors.com">jomar@senseiadvisors.com</a>.';
        formStatus.classList.add('error');
        formStatus.hidden = false;
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalLabel;
      }
    });
  }

})();
