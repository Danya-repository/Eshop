import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {TabMenuService} from "../../../../shared/services/tab-menu.service";

@Component({
  selector: 'app-search-component',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss'],
  providers: [TabMenuService]
})
export class HomeSearchComponent implements OnInit, OnDestroy {

  formSearch: FormGroup = new FormGroup({})
  changeSubscription: Subscription = new Subscription();
  tabSubscription: Subscription = new Subscription()
  inputIsFocused: boolean = false;
  previousWasEmpty: boolean = false;
  searchFlag: string = '';

  constructor(
    public tabMenuService: TabMenuService
  ) { }

  ngOnInit(): void {
    this.formSearch = new FormGroup({
      searchString: new FormControl(
        null,
        [
          Validators.maxLength(200),
          Validators.required
        ])
    })
    this.formSearch?.get('searchString')?.valueChanges.subscribe(valueInput => {
      if (!valueInput && !!this.formSearch.value['searchString']) {
        this.previousWasEmpty = true;
      }
    })
    this.tabSubscription = this.tabMenuService.$stream.subscribe(button => {
      this.searchFlag = button.identifier;
    })
  }

  onFocus() {
    this.inputIsFocused = true;
  }

  onFocusOut() {
    if (this.formSearch.get('searchString')?.errors?.['required']) {
      this.previousWasEmpty = false;
    }
    this.inputIsFocused = false;
  }

  submitSearch(): void {
    console.log('Отправляю поисковой запрос: ', this.formSearch.get('searchString')?.value, '. Флаг:', this.searchFlag)
    this.formSearch?.get('searchString')?.reset();
  }

  clear() {
    this.formSearch?.get('searchString')?.reset();
  }

  ngOnDestroy(): void {
    this.changeSubscription.unsubscribe();
  }
}
