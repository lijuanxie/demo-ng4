import { Component, OnInit, Input } from '@angular/core';
import { Heros } from '../heros';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() herodetail;
  constructor() { }

  ngOnInit() {

  }

}
