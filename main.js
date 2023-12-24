const carouselControlNextEl = document.getElementById("carousel-control-next");

carouselControlNextEl.addEventListener("click", function () {
  
  const activeItemEl = document.querySelector(".carousel-item.active");
  const nextItemEl = activeItemEl.nextElementSibling;
  const activeBulletEl = document.querySelector(
    ".carousel-bullets > button.active"
  );
  const nextBulletEl = activeBulletEl.nextElementSibling;

  if (nextItemEl !== null) {
   
    activeItemEl.classList.remove("active");
    activeBulletEl.classList.remove("active");

   
    nextItemEl.classList.add("active");
    nextBulletEl.classList.add("active");
  }
});

const carouselControlPrevEl = document.getElementById("carousel-control-prev");

carouselControlPrevEl.addEventListener("click", function () {
 
  const activeItemEl = document.querySelector(".carousel-item.active");
  const prevItemEl = activeItemEl.previousElementSibling;
  const activeBulletEl = document.querySelector(
    ".carousel-bullets > button.active"
  );
  const prevBulletEl = activeBulletEl.previousElementSibling;

  if (prevItemEl !== null) {
    
    activeItemEl.classList.remove("active");
    activeBulletEl.classList.remove("active");

   
    prevItemEl.classList.add("active");
    prevBulletEl.classList.add("active");
  }
});

const carouselBulletEls = document.querySelectorAll(
  ".carousel-bullets > button"
);

for (let i = 0; i < carouselBulletEls.length; i++) {
  carouselBulletEls[i].addEventListener("click", function () {
    
    const activeBulletEl = document.querySelector(
      ".carousel-bullets > button.active"
    );
    activeBulletEl.classList.remove("active");

    
    carouselBulletEls[i].classList.add("active");

    
    const itemEls = document.querySelectorAll(".carousel-item");
    const activeItemEl = document.querySelector(".carousel-item.active");
    const itemEl = itemEls[i];

    activeItemEl.classList.remove("active");
    itemEl.classList.add("active");
  });
}