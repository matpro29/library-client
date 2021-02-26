import {Principal} from './principal.model';
import {Summary} from './summary.model';

export class KnowFor {
  cast: Principal[];
  crew: Principal[];
  summary: Summary;
  id: string;
  title: string;
  titleType: string
  year: string;
}
