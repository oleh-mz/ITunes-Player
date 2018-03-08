import { Component, Input } from '@angular/core';
import { ItunesService } from '../shared/itunes.service';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  providers: [ItunesService]
})
export class AlbumComponent {

  view: GridDataResult;

  _artistId = 0;

  // controls the current grid sort state
  sort: SortDescriptor[] = [];

  // controls grid paging settings
  pageSize = 5;
  skip = 0;

  @Input()
  set artistId(artistId: number) {
    this._artistId = artistId;

    // get the albums for this artist
    this.getAlbums();
  }
  get artistId() { return this._artistId; }


  constructor(private itunesService: ItunesService, ) { }

  getAlbums() {
    this.itunesService.getAlbums(this.artistId).then((results: Array<any>) => {
      this.view = {
        data: orderBy(results, this.sort).slice(this.skip, this.skip + this.pageSize),
        total: results.length
      }
    });
  }

  // fires when the sort is changed on the grid
  sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.getAlbums();
  }

  // fires when the user changes pages in the grid
  pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.getAlbums();
  }


}
