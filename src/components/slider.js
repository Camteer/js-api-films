function setSlider(section) {
  const buttonNext = section.querySelector(".button__slider-next");
  const buttonBefore = section.querySelector(".button__slider-before");
  const contentList = section.querySelector(".content__list");
  const sliderWidth = contentList.offsetWidth;
  const windowWidth = contentList.closest(".section").offsetWidth;
  let xOfset = 0;
  hiderSlider(xOfset, buttonBefore, buttonNext, sliderWidth, windowWidth);


  section.querySelector('.cards__containers').addEventListener('scroll', () =>{
    xOfset = section.querySelector('.cards__containers').scrollLeft
    hiderSlider(xOfset, buttonBefore, buttonNext, sliderWidth, windowWidth);
    
  })

  
  buttonBefore.addEventListener("click", () => {
    xOfset = sliderStep(
      buttonBefore,
      contentList,
      sliderWidth,
      windowWidth,
      xOfset, section
    );
    hiderSlider(xOfset, buttonBefore, buttonNext, sliderWidth, windowWidth);
  });
  buttonNext.addEventListener("click", () => {
    xOfset = sliderStep(
      buttonNext,
      contentList,
      sliderWidth,
      windowWidth,
      xOfset, section
    );
    hiderSlider(xOfset, buttonBefore, buttonNext, sliderWidth, windowWidth);
  });
}

function sliderStep(button, list, sliderWidth, windowWidth, xOffset, section) {
  if (button.classList.contains("button__slider-before")) {
    xOffset -= 310 * 4;
    if (xOffset <= 0) {
      xOffset = 0;
    }
    section.querySelector('.cards__containers').scrollLeft = xOffset;
  }

  if (button.classList.contains("button__slider-next")) {
    xOffset += 310 * 4;
    if (xOffset >= sliderWidth - windowWidth) {
      xOffset = sliderWidth - windowWidth;
    }
    section.querySelector('.cards__containers').scrollLeft = xOffset;
  }
  return xOffset;
}

function hiderSlider(
  xOffset,
  buttonBefore,
  buttonNext,
  sliderWidth,
  windowWidth
) {
  if (xOffset == 0) {
    buttonBefore.classList.add("visually-hidden");
    buttonNext.classList.remove("visually-hidden");
  } else if (xOffset >= sliderWidth - windowWidth - 30) {
    buttonNext.classList.add("visually-hidden");
    buttonBefore.classList.remove("visually-hidden");
  } else {
    buttonNext.classList.remove("visually-hidden");
    buttonBefore.classList.remove("visually-hidden");
  }
}

export { sliderStep, setSlider };
