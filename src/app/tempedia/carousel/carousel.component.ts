import { Component, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { Temtem } from './../../shared/models/temtem';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  @Input() public temtems: Temtem[] = [];

  @ViewChild('slickModal') private slickCarousel;

  private subscription: Subscription;

  public slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.subscription = interval(2000).subscribe(() => this.slickCarousel.slickNext());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
