const generateImage = (
  make: string,
  model: string,
  surrounding?: string,
  viewPoint?: string,
  position: string = "center",
  angle: string = "01"
) => {
  return `https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=${make}&modelFamily=${model}&randomPaint=true&zoomType=fullscreen&position=${position}&angle=${angle}${
    surrounding && `&surrounding=${surrounding}&viewPoint=${viewPoint}`
  }`;
};

export default generateImage;
