import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedsComponent } from './components/breeds/breeds.component';
import { ImageComponent } from './components/image/image.component';
import { IntroComponent } from './components/intro/intro.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'breed/:id', component: ImageComponent },
  { path: 'intro', component: IntroComponent },
  { path: '**', component: BreedsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
