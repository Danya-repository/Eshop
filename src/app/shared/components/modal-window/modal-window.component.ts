import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Subscription} from "rxjs";
import {ModalWindowService} from "../../services/modal-window.service";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('container', {static: false, read: ViewContainerRef}) container!: ViewContainerRef;

  private $sub!: Subscription;

  open: boolean = false;

  constructor(private modalWindowService: ModalWindowService) {}

  close(event: Event) {
    event.stopPropagation()
    this.open = false;
    this.container.clear();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.$sub = this.modalWindowService.getElement().subscribe(component => {
      this.container.clear();
      this.container.createComponent(component)
      this.open = true;
    })
  }

  ngOnDestroy(): void {
    this.$sub.unsubscribe();
  }
}
