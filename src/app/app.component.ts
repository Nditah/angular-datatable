import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 5 DataTable Example';
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5,
        paging: false,
        scrollY: '300'
    };
  }
}
