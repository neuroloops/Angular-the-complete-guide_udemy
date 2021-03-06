import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  currentEl: ElementRef;

  @HostBinding('class.show') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;

    const nextSibling = this.currentEl.nativeElement.nextElementSibling;

    if (this.isOpen) {
      nextSibling.classList.add('show');
    } else {
      nextSibling.classList.remove('show');
    }
  }
  constructor(private elRef: ElementRef) {
    this.currentEl = elRef;
  }
}
