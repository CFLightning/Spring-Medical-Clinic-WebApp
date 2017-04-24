import {Injectable} from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class PatientService {
  private patients: Patient[] = [];
  //private sequencer: number = 1; //wykomentowałem, bo mamy id randomvalue w springu
  
  findAllPatients: function() {
    return $http.get('http://localhost:8080/patient/all')
    .then(
          function(response) {
            return response.data;);
          },
          function(errResponse)
  }
   
  }
