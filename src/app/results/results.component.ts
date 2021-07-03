import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onclickfeeStructure(){
    this.router.navigateByUrl('feeStructure')
  }

  onclickCalendar(){
    this.router.navigateByUrl('academicCalender')
  }

  onclickSMC(){
    this.router.navigateByUrl('smc')
  }

  onclickresult(){
    this.router.navigateByUrl('resultsAcademics')
  }
}
