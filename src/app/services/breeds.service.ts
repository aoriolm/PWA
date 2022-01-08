import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Breed } from '../models/breed.interface';
import { Image } from '../models/image.interface';

@Injectable({
  providedIn: 'root',
})
export class BreedsService {
  constructor(private http: HttpClient) {}

  getAllBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>('https://api.thecatapi.com/v1/breeds');
  }

  getBreedById(id): Observable<Image> {
    return this.http.get<Image>('https://api.thecatapi.com/v1/images/' + id);
  }
}
