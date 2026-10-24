import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Auto } from '../auto';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar implements OnChanges {
  @Input() autos: Auto[] = [];
  @Output() selectAutoEvent = new EventEmitter<Auto>();

  brand = '';
  result: Auto[] = [];
  selected?: Auto;

  get brands(): string[] {
    return [...new Set(this.autos.map(a => a.brand))];
  }

  // affiche toutes les voitures dès que la liste arrive du parent
  ngOnChanges() {
    this.searchAutoList();
  }

  searchAutoList() {
    this.result = this.brand
      ? this.autos.filter(a => a.brand === this.brand)
      : this.autos;
  }

  selectedAuto(auto: Auto) {
    this.selected = auto;
    this.selectAutoEvent.emit(auto);
  }
}