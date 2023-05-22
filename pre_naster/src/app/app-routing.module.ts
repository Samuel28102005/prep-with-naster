import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { PastaComponent } from './pasta/pasta.component';

const routes: Routes = [
  {path:'search', component:SearchComponent},
  {path:'pasta/:id', component:PastaComponent},
  {path:'',redirectTo:'search',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
