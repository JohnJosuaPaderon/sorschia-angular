import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sor-scaffold',
  templateUrl: './scaffold.component.html',
  styleUrls: ['./scaffold.component.scss']
})
export class ScaffoldComponent implements OnInit {
  @Input() public isSideNavOpened: boolean;

  constructor() {
  }

  ngOnInit(): void {
    
  }

}
