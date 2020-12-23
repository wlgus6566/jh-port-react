
import Splitting from "splitting";
Splitting();

export default class MainSlide {
  constructor(el) {
      this.DOM = {el: el};
      this.DOM.chars = this.DOM.querySelectorAll('.word > .char');
      this.DOM.imgs = this.DOM.querySelectorAll('.img_wrap > img');
  }
}