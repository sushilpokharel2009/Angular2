import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextHighlight]'
})
export class TextHighlightDirective {
	// elementRef, renderer

	@Input('color') color;
  constructor(public elemRef : ElementRef, public renderer: Renderer) { 
  	 // this.renderer.setElementStyle( this.elemRef.nativeElement, 'background-color', 'yellow');
  	 
  	}

  	// listening to the event to the host: host-listener

  	@HostListener('mouseenter')
  	onMouseEnter(){
  	 // this.renderer.setElementStyle( this.elemRef.nativeElement, 'background-color', 'yellow');
  	 this.renderer.setElementStyle( this.elemRef.nativeElement, 'background-color', this.color);

  	}
  	@HostListener('mouseleave')
  	onMouseLeave(){
  	this.renderer.setElementStyle( this.elemRef.nativeElement, 'background-color', '');

  	}
		
	

}
