import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [{
  path: '',
  component: EmployeeListComponent
},
{
  path: 'employee/:id',
  component: EmployeeComponent
},
{
  path: 'details/:id',
  component: EmployeeDetailsComponent
},
{
  path: '**',
  component: EmployeeListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
