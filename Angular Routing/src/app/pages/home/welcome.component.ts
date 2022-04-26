import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'pm-home',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit {
  // obs = new Observable((observer) => {
  //   console.log('Observable starts');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next('5');
  //   }, 5000);
  // });
  ngOnInit() {
    // of(2, 4, 6)
    //   .pipe(
    //     tap((item) => console.log('current item ' + item))
    //     // map((item) => item * 2)
    //   )
    //   .subscribe({
    //     next: (item) => console.log(`item emitted ${item}`),
    //     error: (err) => console.log(`Error occurred: ${err}`),
    //     complete: () => console.log('Completed '),
    //   });
    // this.obs.subscribe({
    //   next: (item) => console.log(item),
    //   error: (err) => console.log(`Error occurred: ${err}`),
    //   complete: () => console.log('Completed'),
    // });
  }
  getImageUrl(imageId) {
    return `https://picsum.photos/100?image=${imageId}`;
  }

  public pageTitle = 'Welcome ';
}
