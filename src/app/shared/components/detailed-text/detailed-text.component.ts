import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detailed-text',
  templateUrl: './detailed-text.component.html',
  styleUrls: ['./detailed-text.component.scss'],
})

export class DetailedTextComponent {
  @Input() description: string;
  @Input() text: string;
}
