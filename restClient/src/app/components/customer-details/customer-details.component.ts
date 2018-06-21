import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../../customer";
import {DataService} from "../../data.service";

@Component({
  selector: 'customer-detail',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  @Input() customer: Customer;

  constructor(private dataService: DataService) {}

  delete(): void {
    this.dataService.delete(this.customer.id).then(() => this.goBack());
  }

  goBack(): void {
    window.location.replace('');
  }
}
