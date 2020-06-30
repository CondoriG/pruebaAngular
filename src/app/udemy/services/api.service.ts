import { Injectable } from '@angular/core';
import { UdemyServicesModule } from './services.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevosCursosComponent } from '../pages/nuevos-cursos/nuevos-cursos.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: UdemyServicesModule
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getNewReleases(): Observable<any> {

    return this.http.get<any>('https://ionicapp-7a398.firebaseio.com/galaxydemy/subjects.json')
    .pipe(
      map( () => null ) )
  }

}
