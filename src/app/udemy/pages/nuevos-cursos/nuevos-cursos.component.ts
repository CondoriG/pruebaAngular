import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nuevos-cursos',
  templateUrl: './nuevos-cursos.component.html',
  styleUrls: ['./nuevos-cursos.component.scss']
})
export class NuevosCursosComponent implements OnInit {

  constructor(
    private api: ApiService,
    private router: Router
    ) { }

  ngOnInit() {}


  goCursoDetail(id: string) {
    this.router.navigate(['/udemy/detalles-curso', id]);
  }
}
