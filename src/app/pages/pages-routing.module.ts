import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'todo',
      loadChildren: () => import('./todo/todo.module')
        .then(m => m.TodoModule),
    },
    {
      path: '',
      redirectTo: 'todo',
      pathMatch: 'full',
    },
]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
