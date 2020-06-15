import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ListService } from '@app/shared/list.service'


@Component({
  selector: 'app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.css']
})
export class ListModalComponent implements OnInit {

  MyLists

  constructor(public actioveModal: NgbActiveModal, private service: ListService) { }

  ngOnInit(): void {
    this.service.get().subscribe(lists => this.MyLists = lists)
  }

}
