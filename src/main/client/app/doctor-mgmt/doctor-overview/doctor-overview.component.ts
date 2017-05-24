import {Component, OnInit} from "@angular/core";
import {DoctorService} from "../doctor.service";
import {Observable} from "rxjs/Observable";
import {Doctor} from "../doctor-class";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'doctor-overview',
  template: require('./doctor-overview.component.html!text'),
  providers: [DoctorService]
} as Component)
export class DoctorOverviewComponent implements OnInit {
  public currentDoctors: Observable<Doctor[]>;

  constructor(private doctorService: DoctorService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.currentDoctors = this.route.snapshot.data['doctors'];
  }

  deleteDoctor(doctor: Doctor): void {
    this.doctorService.deleteDoctor(doctor)
      .subscribe(res => {
        location.reload();
      });
  }
}
