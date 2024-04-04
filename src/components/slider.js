function sliderStep(evt, list, count, xOffset) {
  if (evt.target.classList.contains("button__slider-before")) {
    xOffset -= 310 * 4;
    if (xOffset <= 0) {
      xOffset = 0;
    }
    list.style.left = `-${xOffset}px`;
  }

  if (evt.target.classList.contains("button__slider-next")) {
    xOffset += 310 * 4;
    console.log(count);
    if (xOffset >= count - 1440) {
      xOffset = count - 1440;
    }
    list.style.left = `-${xOffset}px`;
  }
  return xOffset;
}

export { sliderStep };
