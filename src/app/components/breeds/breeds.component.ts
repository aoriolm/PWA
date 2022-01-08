import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Breed } from 'src/app/models/breed.interface';
import { BreedsService } from 'src/app/services/breeds.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css'],
})
export class BreedsComponent implements OnInit {
  dataSource: Breed[] = [];
  loading$ = this.loader.loading$;

  constructor(
    private breedsService: BreedsService,
    private router: Router,
    public loader: LoadingService
  ) {}

  ngOnInit(): void {
    this.breedsService
      .getAllBreeds()
      .subscribe((breed) => (this.dataSource = breed));
  }

  displayedColumns: string[] = [
    'name',
    'affection_level',
    'child_friendly',
    'description',
  ];

  detailPage(id: string): void {
    this.router.navigateByUrl('/breed/' + id);
  }
}
