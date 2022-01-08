import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';
import { BreedsService } from 'src/app/services/breeds.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  image!: Image;
  show: boolean = false;

  constructor(
    private breedsService: BreedsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(identifier);
    this.breedsService.getBreedById(identifier).subscribe((image) => {
      if (!image) {
        //return this.router.navigateByUrl('/');
      }
      this.image = image;
      console.log('image --> ', this.image.url);
    });
  }

  showOrHide(): void {
    this.show = !this.show;
  }
}
