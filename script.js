arctral.onclick = function(event) {
    let arctralCoords = this.getBoundingClientRect();
    let ballCoords = {
      top: event.clientY - arctralCoords.top - arctral.clientTop - ball.clientHeight / 2,
      left: event.clientX - arctralCoords.left - arctral.clientLeft - ball.clientWidth / 2
    };
    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;
    if (ballCoords.left + ball.clientWidth > arctral.clientWidth) {
      ballCoords.left = arctral.clientWidth - ball.clientWidth;
    }
    if (ballCoords.top + ball.clientHeight > arctral.clientHeight) {
      ballCoords.top = arctral.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
  }