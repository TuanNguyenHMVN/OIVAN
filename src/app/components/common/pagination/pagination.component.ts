import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage!: number;

  @Output() changePage = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onGo(target: string): void {
    this.changePage.emit(
      target == 'back' ? this.currentPage - 1 : this.currentPage + 1
    );
  }
}
