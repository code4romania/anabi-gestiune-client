import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Defendant, DefendantType, Identifier } from '@app/core';

@Component({
  selector: 'app-view-defendant',
  templateUrl: './view-defendant.component.html',
  styleUrls: ['./view-defendant.component.scss'],
})
export class ViewDefendantComponent {
  @Input() defendant: Defendant;
  @Input() identifiers: Identifier[];
  @Input() isDeleting: boolean;
  @Output() defendantDeleted: EventEmitter<Defendant> = new EventEmitter<Defendant>();

  getDefendantType(aIsPerson: boolean) {
    return aIsPerson ? DefendantType.Person.toString() : DefendantType.Company.toString();
  }

  getIdentifier(aIdentifierType: number): Identifier {
    return this.identifiers.find(aIdentifier => aIdentifier.id === aIdentifierType);
  }

  onDefendantDeleted() {
    this.defendantDeleted.emit(this.defendant);
  }
}
