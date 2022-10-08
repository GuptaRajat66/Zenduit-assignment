import { Component, OnInit } from '@angular/core';
import {faList, faPoll, faBell} from '@fortawesome/free-solid-svg-icons';

export class NavItems{
  itemName: string;
  icon: string;
  isActive: boolean;

  constructor(itemName: string, icon: string, isActive: boolean){
    this.itemName = itemName;
    this.icon  = icon;
    this.isActive = isActive;
  }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faList = faPoll;
  title: string = "ZenduForms";
  navItems: NavItems[] = [
    new NavItems("Forms", "list", false),
    new NavItems("Customers", "group", false),
    new NavItems("Submissions", "graphic_eq", true),
    new NavItems("History", "history", false),
    new NavItems("Reports", "insert_chart", false),
    new NavItems("Workflow", "insert_chart", false)
  ];
    constructor() { }

}
