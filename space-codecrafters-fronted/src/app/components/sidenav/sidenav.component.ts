import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() visible:boolean = false;
  @Input() messageExist:boolean = false;
  @Input() sections:any[] = []

  @Output() change = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.change.emit(!this.visible);
  }
}
