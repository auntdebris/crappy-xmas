const animateScroll = (targetPos, duration) => {
  const documentBodyElement = document.scrollingElement || document.body;
  const startPos = documentBodyElement.scrollTop;
  const posDelta = targetPos - startPos;
  // Assumes 60 frames per second
  const totalFrames = duration * 0.06;

  // Robert Penner's easeOutCubic function
  const easeOutCubic = (currentFrame) => {
    return (
      posDelta * (Math.pow(currentFrame / totalFrames - 1, 3) + 1) + startPos
    );
  };

  const handleAnimationFrame = (currentFrame) => {
    if (currentFrame > totalFrames) {
      return;
    }

    window.requestAnimationFrame(() => {
      documentBodyElement.scrollTop = easeOutCubic(currentFrame);
      handleAnimationFrame(currentFrame + 1);
    });
  };

  handleAnimationFrame(0);
};

export default animateScroll;
