function updateCopyrightYear() {
  updateElmText(
    document.querySelector("#copyright-year"),
    new Date().getFullYear()
  );
}

function updateElmText(elm, text) {
  elm.textContent = text;
}

const headerEl = document.querySelector('.header')

var mobileNavIcon = document.querySelector(".btn-mobile-nav");
mobileNavIcon.addEventListener("click", (e) => {
  headerEl.classList.toggle("nav-open");
});

/////////////////////////////
// Smooth scrolling
/////////////////////////////
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');

    // scroll to other links
    if (href === '#') {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const el = document.querySelector(href);
      el.scrollIntoView({behavior: "smooth"});
    }

    // close navigation
    if(link.classList.contains('main-nav-link')) headerEl.classList.toggle("nav-open");
  })
});


/////////////////////////////
// Stick Header when you leave hero section
/////////////////////////////
const sectionHero = document.querySelector('.section-hero');

const observer = new IntersectionObserver((entries) => {
  const ent = entries[0];
  if (ent.isIntersecting) document.body.classList.remove("sticky");
  else document.body.classList.add("sticky");
}, {
  //watch the viewport for the element
  root: null,
  //fire event when 0% of the element is in the viewport
  // and 1 = 100%
  threshold: 0,
  //offsets element position
  //negative moves the element up, so it leaves the observer sooner
  rootMargin: '-80px'
});
observer.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
updateCopyrightYear();

// alert("test");

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
