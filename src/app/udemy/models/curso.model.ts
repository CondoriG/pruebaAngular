import { INuevosCursosResponse } from '../interfaces/nuevos-cursos-response.interface';

export class Cursos {
  id: string;
  img: string;
  instructor: string;
  progress: number;
  qualification: number;
  title: string;

  constructor(data: INuevosCursosResponse){
    this.id = data.id;
    this.img = data.img || '';
    this.instructor = data.instructor;
    this.progress = data.progress;
    this.qualification = data.qualification;
    this.title = data.title;
  }
}
