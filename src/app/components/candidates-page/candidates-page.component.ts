import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../models/user";

@Component({
  selector: 'app-candidates-page',
  templateUrl: './candidates-page.component.html',
  styleUrls: ['./candidates-page.component.scss']
})
export class CandidatesPageComponent implements OnInit {

  constructor(private dataService:DataService,
              private activatedRoute: ActivatedRoute) { }

  userData!: User[];

  filterText="";

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.dataService.data().subscribe(data=>{
      this.userData = data;
    });
  }

}
