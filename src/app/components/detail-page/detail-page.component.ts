import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  constructor(private dataService:DataService) { }

  userData!: User;
  id!:any;

  ngOnInit(): void {
    this.id = window.location.href.split('/data/detail/').pop();
    this.getData();
  }

  getData(){
    this.dataService.data().subscribe(data=>{
      data.map((element,index)=>{
        if(index == (this.id - 1)){
          this.userData = element;
        }
      });
    });

  }

}
