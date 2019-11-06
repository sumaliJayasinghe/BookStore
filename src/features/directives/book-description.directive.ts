import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appBookDescription]'
})
export class BookDescriptionDirective implements OnChanges {
  @Input('appBookDescription') tDescription: string;
  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.el.nativeElement.innerHTML = this.tDescription;
  }
}
