import { CountriesService } from './../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  public selectedRegion?: Region;

  constructor(private contriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.contriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.contriesService.cacheStore.byRegion.region;
  }

  searchByRegion(countrie: Region) {
    this.selectedRegion = countrie;
    this.contriesService.searchRegion(countrie).subscribe((contrie) => {
      this.countries = contrie;
    });
  }
}
