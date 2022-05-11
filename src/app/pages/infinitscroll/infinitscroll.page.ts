import { Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinitscroll',
  templateUrl: './infinitscroll.page.html',
  styleUrls: ['./infinitscroll.page.scss'],
})
export class InfinitscrollPage implements OnInit {

  numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  constructor() { }

  ngOnInit() {
  }
    atualizaInfinite(inifiniteScrollEvent: any){
      this.limite += 10;
      inifiniteScrollEvent.target.complete();
  }
}
