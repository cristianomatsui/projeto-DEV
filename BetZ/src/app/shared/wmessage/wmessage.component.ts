import { Component, Input } from '@angular/core';

@Component({
  selector: 'wmessage',
  templateUrl: './WMessage.component.html'
})
export class WMessageComponent {

  @Input() text = '';
}
