import { Component} from '@angular/core';
import { ItunesService } from '../shared/itunes.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  providers: [ItunesService],
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent {

  searchResults: Array<any> = [];
  artistId = 0;

  selectedArtist: string;


  constructor(private itunesService: ItunesService) { }

  search(searchTerm) {
    this.itunesService.search(searchTerm).then(results => {
      this.searchResults = results;
    });
  }

  getAlbums(artistId: number, artistName: string) {
    this.artistId = artistId;
    this.selectedArtist = artistName;
  }
}
