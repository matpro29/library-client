import {Image} from './model.image';
import {KnowFor} from './knowFor.model';

export class Title {
  id: string;
  image: Image;
  runningTimeInMinutes: string;
  nextEpisode: string;
  numberOfEpisodes: string;
  seriesEndYea: string;
  seriesStartYear: string;
  title: string;
  titleType: string;
  year: string;

  legacyNameText: string;
  name: string;
  knownFor: KnowFor[];
}
