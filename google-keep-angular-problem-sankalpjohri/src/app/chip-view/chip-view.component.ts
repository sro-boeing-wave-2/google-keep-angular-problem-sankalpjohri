import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip-view',
  templateUrl: './chip-view.component.html',
  styleUrls: ['./chip-view.component.css']
})
export class ChipViewComponent implements OnInit {

  @Input() text;
  public chipColor = null;
  constructor() { }

  ngOnInit() {
    
  }

}
