import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatListItemMeta, MatListItemTitle, MatListItemLine } from '@angular/material/list';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { FeePartsFragment } from '@graphql';
import { FrequencyPipe } from '@pipes';

@Component({
  selector: 'app-fee-item',
  imports: [
    MatIcon,
    MatIconButton,
    MatListItem,
    MatListItemTitle,
    MatListItemLine,
    MatListItemMeta,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    FrequencyPipe,
    CurrencyPipe,
  ],
  templateUrl: './fee-item.component.html',
  styles: ``
})
export class FeeItemComponent {
  @Input({ required: true }) fee!: FeePartsFragment;
  @Input() menuTrigger!: MatMenuTrigger;

  @Output() update = new EventEmitter<FeePartsFragment>();
  @Output() delete = new EventEmitter<FeePartsFragment>();

  public openMenu(event: MouseEvent) {
    event.stopPropagation();

    if (this.menuTrigger) {
      this.menuTrigger.openMenu();
    }
  }
}
