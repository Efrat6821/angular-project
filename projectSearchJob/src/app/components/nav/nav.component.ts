import { Component } from '@angular/core';
import { ServiceNavService } from '../../service/service-nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(private NavService: ServiceNavService) { };
  u = this.NavService.getUser();

}
