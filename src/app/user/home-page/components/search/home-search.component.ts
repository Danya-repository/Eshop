import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-component',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit {

  formSearch: FormGroup | undefined;

  constructor() { }

  ngOnInit(): void {
    this.formSearch = new FormGroup({
      searchString: new FormControl(
        null,
        [Validators.minLength(1), Validators.maxLength(200)])
    })
  }

  submitSearch() {
    console.log('Form submitted, this form: ', this.formSearch)
  }
}
