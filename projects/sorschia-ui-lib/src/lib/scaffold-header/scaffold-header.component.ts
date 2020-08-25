import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sor-scaffold-header',
  templateUrl: './scaffold-header.component.html',
  styleUrls: ['./scaffold-header.component.scss']
})
export class ScaffoldHeaderComponent implements OnInit {

  constructor() { }

  @Input() color: string;

  ngOnInit(): void {
  }

}
