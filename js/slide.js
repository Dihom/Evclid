const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs_btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function(tabConent) {
        tabConent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
})

const faq = Array.from(document.querySelectorAll(".faq__wrapper-questions"));

faq.forEach((quest) => {
  quest.addEventListener("click", questClick);
});

function questClick(e) {
  e.preventDefault();
  let currentFaq = e.target.closest(".faq__wrapper-questions");
  let currentContent = e.target.nextElementSibling;
  currentFaq.classList.toggle("active");
  if (currentFaq.classList.contains("active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  } else {
    currentContent.style.maxHeight = 0;
  }
}