import { Component, OnInit } from '@angular/core';
import { HerosService } from './heros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selected: any;
  // selected: Heros;
  herolist: any;
  constructor(
    private serviceList: HerosService,
    private router: Router,
  ) {

  }
  // hero = 'belle'
  // hero: Heros = {
  //   id: 1111,
  //   name: 'belle'
  // };
  // herolist = HeroList;
  // select(item) {
  //   this.selected = item;
  // }
  getlist(): void {
    this.serviceList.getHeros()
      .subscribe(herolist => this.herolist = herolist)
  }
  select(item: any): void {
    this.selected = item;
  }

  getInfo(id): void {
    this.router.navigate(['/detail', id]);
  }
  ngOnInit() {
    this.getlist();
  }

}
