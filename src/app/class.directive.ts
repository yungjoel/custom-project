import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

   }
    @Input() set appClass(value: Object){
  let entries = Object.entries(value);
  for(let item of entries){
     let[className, condition] = item;
     if(condition){
      this.renderer.addClass(this.element.nativeElement, className);
     }
  }
 };
 }


