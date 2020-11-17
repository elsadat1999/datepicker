import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorsDirective {
  constructor(private _elRef: ElementRef, private _renderer: Renderer2) {
    let element = this._elRef.nativeElement;
    this._renderer.addClass(element, element.getAttribute('color'));
  }

}
