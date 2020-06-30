import { INuevosCursosResponse } from '../interfaces/nuevos-cursos-response.interface';

export class Temario {
  title: string;
  section: string;
  classes: string;


  constructor(data: INuevosCursosResponse){
    this.title = data.id;
    this.section = data.section;

  }
