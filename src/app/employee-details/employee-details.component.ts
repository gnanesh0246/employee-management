import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeId!: number;
  employeeDetails$!: Observable<Employee>;
  reportees$!: Observable<{id: number, name: string}[]>;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.employeeId = params['id'];
      this.employeeDetails$ = this.employeeService.getEmployeeDetails(this.employeeId);
      this.reportees$ = this.employeeService.getReportees(+this.employeeId);
    });
  }

  viewEmployeeDetails(id: number) {
    this.router.navigate(['details', id]);
  }
}
