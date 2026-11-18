
/* =========================================
   NEVURA SOCIETY — COMPLETE JAVASCRIPT
========================================= */

/*
  TO ADD A NEW EVENT POST:

  1. Add photos to your images folder.
  2. Copy one object inside POSTS.
  3. Change slug, category, date, title,
     excerpt, description, cover, and photos.
  4. Place newer posts at the beginning.

  The homepage shows the first 3 posts.
  The Events page shows every post.
*/

/* =========================================
   EVENT POSTS
========================================= */

const POSTS = [

  {
    slug: 'the-exchange-party',
    category: 'Concept Preview',
    date: 'Coming soon',
    title: 'The Exchange Party',

    excerpt:
      'An evening built around the work we bring and the people we meet.',

    description:
      'Bring something you have made. Discover what others are making. This gallery is a visual preview for the planned Exchange Party, not documentation of a completed event.',

    cover:
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1500&q=85',

    photos: [
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1300&q=85',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1300&q=85',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1300&q=85'
    ]
  },

  {
    slug: 'nevura-table',
    category: 'Concept Preview',
    date: 'Coming soon',
    title: 'NEVURA Table',

    excerpt:
      'Good food, generous conversation, and new perspectives.',

    description:
      'A visual preview of our intimate dinner series, designed to bring curious people together across different schools.',

    cover:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1500&q=85',

    photos: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1300&q=85',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1300&q=85',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1300&q=85'
    ]
  },

  {
    slug: 'city-notes',
    category: 'Concept Preview',
    date: 'Coming soon',
    title: 'City Notes',

    excerpt:
      'Art, culture, and creative discoveries around New York.',

    description:
      'A preview of our gallery walks and cultural experiences. Actual event photography and recaps can replace these samples later.',

    cover:
      'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=1500&q=85',

    photos: [
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1300&q=85',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1300&q=85',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1300&q=85'
    ]
  },

  {
    slug: 'open-studio',
    category: 'Concept Preview',
    date: 'Coming soon',
    title: 'Open Studio Night',

    excerpt:
      'A closer look at the spaces where ideas are made.',

    description:
      'A visual preview of a rotating open studio series across New School disciplines.',

    cover:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1500&q=85',

    photos: [
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1300&q=85',
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1300&q=85',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1300&q=85'
    ]
  }

];

/* =========================================
   UPCOMING EVENTS
========================================= */

const UPCOMING_EVENTS = [

  {
    title: 'CROSSFADE — Launch',
    date: 'TBA',
    place: 'New York City',
    description:
      'A gathering designed to spark creative connections across The New School.'
  },

  {
    title: 'NEVURA Table No. 1',
    date: 'TBA',
    place: 'Location to be announced',
    description:
      'An intimate dinner for members, with conversation and new ideas.'
  },

  {
    title: 'City Notes: Gallery Walk',
    date: 'TBA',
    place: 'New York City',
    description:
      'Explore exhibitions and creative spaces with NEVURA members.'
  }

];

/* =========================================
   EMAIL HELPER
========================================= */

function sendEmail(subject, body = '') {

  const email = 'hello@nevura.org';

  const url =
    `mailto:${email}?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.location.href = url;

}

/* =========================================
   NAVIGATION + SHARED FOOTER
========================================= */

function setupSharedLayout() {

  // Detect the current page
  const page =
    window.location.pathname.split('/').pop()
    || 'index.html';

  const activePage =
    page === 'post.html' ? 'events.html' : page;

  // Highlight current page
  const links = document.querySelectorAll(
    '.site-nav a'
  );

  links.forEach(link => {

    const href = link.getAttribute('href');

    if (href === activePage) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }

  });

  // Mobile menu
  const toggle = document.querySelector(
    '.menu-toggle'
  );

  const menu = document.querySelector(
    '.site-nav'
  );

  if (toggle && menu) {

    toggle.addEventListener('click', () => {

      const isOpen = menu.classList.toggle('open');

      toggle.setAttribute(
        'aria-expanded',
        String(isOpen)
      );

      toggle.setAttribute(
        'aria-label',
        isOpen
          ? 'Close navigation menu'
          : 'Open navigation menu'
      );

      toggle.textContent = isOpen ? '×' : '☰';

    });

    // Close menu when a link is clicked
    menu.querySelectorAll('a').forEach(link => {

      link.addEventListener('click', () => {

        menu.classList.remove('open');

        toggle.setAttribute(
          'aria-expanded',
          'false'
        );

        toggle.textContent = '☰';

      });

    });

  }

  // Shared footer
  const footer = document.querySelector(
    '#site-footer'
  );

  if (footer) {

    footer.innerHTML = `
      <footer class="site-footer">

        <div class="container">

          <div class="footer-grid">

            <div>
              <a class="footer-logo" href="index.html">
                Nevura
              </a>

              <p class="footer-caption">
                A student-led community for creative life,
                meaningful connections, and giving forward.
              </p>
            </div>

            <nav class="footer-links" aria-label="Footer navigation">

              <a href="index.html">HOME</a>
              <a href="about.html">ABOUT</a>
              <a href="structure.html">STRUCTURE</a>
              <a href="programs.html">PROGRAMS</a>
              <a href="events.html">EVENTS</a>
              <a href="give.html">GIVE</a>
              <a href="join.html">JOIN</a>

            </nav>

            <div class="footer-contact">

              <p class="eyebrow">GET IN TOUCH</p>

              <a href="mailto:hello@nevura.org">
                hello@nevura.org
              </a>

              <p>The New School · New York City</p>

            </div>

          </div>

          <div class="footer-bottom">

            <span>© 2026 NEVURA SOCIETY</span>

            <a href="index.html">
              ← BACK TO HOME
            </a>

          </div>

        </div>

      </footer>
    `;

  }

}

/* =========================================
   STORY CARD COMPONENT
========================================= */

function storyCard(post) {

  return `
    <a
      class="story-card"
      href="post.html?id=${encodeURIComponent(post.slug)}"
    >

      <div class="photo-wrap story-image">

        <img
          loading="lazy"
          src="${post.cover}"
          alt="Editorial image for ${post.title}"
        >

      </div>

      <span class="story-meta">
        ${post.category.toUpperCase()} ·
        ${post.date.toUpperCase()}
      </span>

      <h3>${post.title}</h3>

      <p>${post.excerpt}</p>

    </a>
  `;

}

/* =========================================
   RENDER HOME + EVENTS
========================================= */

function renderStories() {

  // Homepage: first three posts
  const home = document.querySelector(
    '#home-posts'
  );

  if (home) {
    home.innerHTML = POSTS
      .slice(0, 3)
      .map(storyCard)
      .join('');
  }

  // Events page: all posts
  const events = document.querySelector(
    '#events-posts'
  );

  if (events) {
    events.innerHTML = POSTS
      .map(storyCard)
      .join('');
  }

  // Upcoming events
  const upcoming = document.querySelector(
    '#upcoming-events'
  );

  if (upcoming) {

    upcoming.innerHTML = UPCOMING_EVENTS.map(event => `

      <article class="upcoming-item">

        <div class="upcoming-date">
          ${event.date}
          <small>${event.place}</small>
        </div>

        <div>
          <h3>${event.title}</h3>
          <p>${event.description}</p>
        </div>

        <button
          type="button"
          class="outline-button"
          data-interest="${event.title}"
        >
          ASK FOR UPDATES
        </button>

      </article>

    `).join('');

  }

  // Event enquiry buttons
  document.querySelectorAll(
    '[data-interest]'
  ).forEach(button => {

    button.addEventListener('click', () => {

      sendEmail(
        `NEVURA event interest: ${button.dataset.interest}`,
        'Hello NEVURA, please let me know when details are available.'
      );

    });

  });

}

/* =========================================
   INDIVIDUAL POST PAGE
========================================= */

function renderPostDetail() {

  const target = document.querySelector(
    '#post-detail'
  );

  if (!target) return;

  // Get post ID from URL
  const slug = new URLSearchParams(
    window.location.search
  ).get('id');

  // Find matching post
  const post = POSTS.find(
    item => item.slug === slug
  );

  // Invalid post
  if (!post) {

    target.innerHTML = `
      <section class="post-heading">

        <p class="eyebrow wine-text">JOURNAL</p>

        <h1>Story not found.</h1>

        <a class="back-link" href="events.html">
          ← BACK TO EVENTS
        </a>

      </section>
    `;

    return;
  }

  document.title =
    `${post.title} — NEVURA Journal`;

  // Generate post content
  target.innerHTML = `

    <div class="post-heading">

      <p class="eyebrow wine-text">
        ${post.category.toUpperCase()} /
        ${post.date.toUpperCase()}
      </p>

      <h1>${post.title}</h1>

      <p class="intro-note">
        ${post.excerpt}
      </p>

    </div>

    <div class="photo-wrap post-cover">

      <img
        src="${post.cover}"
        alt="Cover image for ${post.title}"
      >

    </div>

    <div class="post-body">
      <p>${post.description}</p>
    </div>

    <div class="post-gallery">

      ${post.photos.map((src, index) => `

        <button
          type="button"
          aria-label="Expand photo ${index + 1}"
        >

          <img
            loading="lazy"
            src="${src}"
            alt="${post.title} gallery photo ${index + 1}"
          >

        </button>

      `).join('')}

    </div>

    <a class="back-link" href="events.html">
      ← BACK TO EVENTS & JOURNAL
    </a>
  `;

  /* LIGHTBOX */

  const dialog = document.querySelector(
    '#lightbox'
  );

  if (!dialog) return;

  const dialogImage = dialog.querySelector(
    'img'
  );

  const closeButton = dialog.querySelector(
    '.lightbox-close'
  );

  // Open selected photo
  target.querySelectorAll(
    '.post-gallery button'
  ).forEach(button => {

    button.addEventListener('click', () => {

      const image = button.querySelector('img');

      dialogImage.src = image.src;
      dialogImage.alt = image.alt;

      dialog.showModal();

    });

  });

  // Close with X
  closeButton.addEventListener('click', () => {
    dialog.close();
  });

  // Close by clicking outside
  dialog.addEventListener('click', event => {

    if (event.target === dialog) {
      dialog.close();
    }

  });

}

/* =========================================
   GIVE PAGE FUNCTIONALITY
========================================= */

function setupGiving() {

  const range = document.querySelector(
    '#donation-range'
  );

  if (!range) return;

  const amount = document.querySelector(
    '#donation-value'
  );

  const action = document.querySelector(
    '#donation-action'
  );

  let fund = 'Annual Scholarship Fund';

  function update() {

    amount.textContent = Number(
      range.value
    ).toLocaleString('en-GB');

    const subject =
      `NEVURA giving enquiry — ${fund}`;

    const body =
      `Hello NEVURA, I would like information about a possible £${range.value} contribution to the ${fund}.`;

    action.href =
      `mailto:hello@nevura.org?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

  }

  // Amount slider
  range.addEventListener('input', update);

  // Fund buttons
  document.querySelectorAll(
    '[data-fund]'
  ).forEach(button => {

    button.addEventListener('click', () => {

      fund = button.dataset.fund;

      document.querySelectorAll(
        '[data-fund]'
      ).forEach(item => {

        item.classList.remove('active');

        item.setAttribute(
          'aria-pressed',
          'false'
        );

      });

      button.classList.add('active');

      button.setAttribute(
        'aria-pressed',
        'true'
      );

      update();

    });

  });

  update();

}

/* =========================================
   JOIN PAGE FUNCTIONALITY
========================================= */

function setupJoin() {

  const form = document.querySelector(
    '#join-form'
  );

  if (!form) return;

  let type = 'Become a member';

  // Membership type
  document.querySelectorAll(
    '[data-type]'
  ).forEach(button => {

    button.addEventListener('click', () => {

      type = button.dataset.type;

      document.querySelectorAll(
        '[data-type]'
      ).forEach(item => {

        item.classList.remove('active');

        item.setAttribute(
          'aria-pressed',
          'false'
        );

      });

      button.classList.add('active');

      button.setAttribute(
        'aria-pressed',
        'true'
      );

    });

  });

  // Form submit
  form.addEventListener('submit', event => {

    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const name = data.get('name');
    const email = data.get('email');
    const school = data.get('school');
    const message = data.get('message') || '(none)';

    const subject = `NEVURA — ${type}`;

    const body = `
Name: ${name}
Email: ${email}
School & Program: ${school}
Interest: ${type}

Message:
${message}
    `;

    sendEmail(subject, body);

  });

}

/* =========================================
   INITIALIZE WEBSITE
========================================= */

document.addEventListener('DOMContentLoaded', () => {

  setupSharedLayout();

  renderStories();

  renderPostDetail();

  setupGiving();

  setupJoin();

});
