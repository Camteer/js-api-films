
   
function sliderStep (evt, list, count, xOffset) {
    if (evt.target.classList.contains('button__slider-before')) {
        xOffset -= 296*5
        if (xOffset <= 0) {
            xOffset = 0
        } 
        list.style.left = `-${xOffset}px`
    }

    if (evt.target.classList.contains('button__slider-next')) {
        xOffset += 296*5
        console.log(count)
        if (xOffset >= count-(297*3)) {
            xOffset = count -(297*3)    
        }
        list.style.left = `-${xOffset}px`
    }
    return xOffset
}

export {sliderStep, }