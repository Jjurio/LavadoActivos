import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }

}
