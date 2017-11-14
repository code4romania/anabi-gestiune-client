import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})

export class AssetComponent implements OnInit {
  public page;

  constructor() {
  }

  ngOnInit() {
    this.page = 'asset page';
  }
}
