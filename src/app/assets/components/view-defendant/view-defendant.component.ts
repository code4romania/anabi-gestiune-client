import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Defendant, DefendantType, Identifier } from '@app/core';
import * as fromDefendants from '@app/core/store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-defendant',
  templateUrl: './view-defendant.component.html',
  styleUrls: ['./view-defendant.component.scss'],
})
export class ViewDefendantComponent implements OnInit {
  @Input() defendant: Defendant;
  @Input() identifiers: Identifier[];
  @Output() defendantDeleted: EventEmitter<fromDefendants.DeleteDefendantPayload>
    = new EventEmitter<fromDefendants.DeleteDefendantPayload>();

  deleting$: Observable<boolean>;

  constructor(private store: Store<fromDefendants.DefendantsState>) { }

  ngOnInit(): void {
    this.deleting$ = this.store.select(fromDefendants.getDefendantDeletingById(this.defendant.id));
  }

  getDefendantType(aIsPerson: boolean) {
    return aIsPerson ? DefendantType.Person.toString() : DefendantType.Company.toString();
  }

  getIdentifier(aIdentifierType: number): Identifier {
    return this.identifiers.find(aIdentifier => aIdentifier.id === aIdentifierType);
  }

  onDefendantDeleted() {
    const payload: fromDefendants.DeleteDefendantPayload = {
      defendantId: this.defendant.id,
      assetId: this.defendant.getAsset().id,
    };
    this.defendantDeleted.emit(payload);
  }
}
