import { Component, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http'

@Component({
  selector: 'app-simple-httpcomponen',
  templateUrl: './simple-httpcomponen.component.html',
  styleUrls: ['./simple-httpcomponen.component.css']
})
export class SimpleHTTPComponenComponent implements OnInit {
  data: Object
  loading: boolean
  constructor(private http: Http) {}

  ngOnInit() {}
}
