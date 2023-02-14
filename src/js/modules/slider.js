function slider({
  containerSelector,
  slideSelector,
  prevArrowSelector,
  nextArrowSelector,
  totalCountSelector,
  currentCountSelector,
  wrapperSelector,
  fieldSelector,
}) {
  //Slider

  //Более сложный пример слайдера!

  /* const slides = document.querySelectorAll(slideSelector),
    slider = document.querySelector(containerSelector),
    prev = document.querySelector(prevArrowSelector),
    next = document.querySelector(nextArrowSelector),
    current = document.querySelector(currentCountSelector),
    total = document.querySelector(totalCountSelector),
    slidesWrapper = document.querySelector(wrapperSelector),
    slidesField = document.querySelector(fieldSelector),
    width = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1,
    offset = 0;

  if (slideIndex < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = `0.5s all`;

  slidesWrapper.style.overflow = "hidden";

  slides.forEach((slide) => (slide.style.width = width));

  slider.style.position = "relative";

  const indicators = document.createElement("ol"),
    dots = [];

  indicators.classList.add("carousel-indicators");

  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.classList.add("dot");
    dot.setAttribute("data-slide-to", i + 1);

    if (i == 0) {
      dot.style.opacity = 1;
    }

    indicators.append(dot);
    dots.push(dot);
  }

  const dotsOpacityStyle = (dots) => {
    dots.forEach((dot) => (dot.style.opacity = `.5`));
    dots[slideIndex - 1].style.opacity = 1;
  };

  const leaveOnlyNumbers = (value) => +value.replace(/\D/g, "");

  next.addEventListener("click", () => {
    if (offset == leaveOnlyNumbers(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += leaveOnlyNumbers(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dotsOpacityStyle(dots);
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = leaveOnlyNumbers(width) * (slides.length - 1);
    } else {
      offset -= leaveOnlyNumbers(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dotsOpacityStyle(dots);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      slideIndex = slideTo;
      offset = leaveOnlyNumbers(width) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dotsOpacityStyle(dots);
    });
  }); */

  //Простой пример слайдера!

  const slides = document.querySelectorAll(slideSelector),
    slider = document.querySelector(containerSelector),
    prev = document.querySelector(prevArrowSelector),
    next = document.querySelector(nextArrowSelector),
    current = document.querySelector(currentCountSelector),
    total = document.querySelector(totalCountSelector);

  let slideIndex = 1;
  showSlides(slideIndex);

  if (slideIndex < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((slide) => (slide.style.display = "none"));

    slides[slideIndex - 1].style.display = "block";

    if (slideIndex < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  prev.addEventListener("click", () => {
    plusSlides(-1);
  });

  next.addEventListener("click", () => {
    plusSlides(1);
  });
}

export default slider;
