import { Component, OnInit } from '@angular/core';
import { Heros } from '../heroes/heros';
import { HerosService } from '../heroes/heros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Heros[] = [];

  constructor(
    private heroService: HerosService,
    private route: Router
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeros()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getinfo(id): void {
    this.route.navigate(['detail', id])
  }
}
