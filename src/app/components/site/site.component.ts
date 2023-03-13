import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  @Output() light:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
