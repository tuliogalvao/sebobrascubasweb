import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit{

  books: any[];

  responsiveOptions: any[];

  ngOnInit() {
    this.responsiveOptions = [{
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1
  },
  {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
  },
  {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
  }];

  // tslint:disable-next-line:align
  this.books = [
    {brand: 'banner_book'},
    {brand: 'cafe_expresso'},
    {brand: 'servicos'}
  ];
  }

}
