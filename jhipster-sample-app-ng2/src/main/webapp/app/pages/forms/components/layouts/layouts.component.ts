import {Component, OnInit} from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';

@Component({
  selector: 'layouts',
  templateUrl: './layouts.html',
})
export class Layouts implements OnInit {

  public defaultPicture = 'content/img/theme/no-photo.png';
  public profile: any = {
    picture: 'content/img/app/profile/Nasta.png'
  };
  public uploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  public fileUploaderOptions: NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  constructor() {
  }

  ngOnInit() {
  }
}
