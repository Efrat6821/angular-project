import { Component } from '@angular/core';
import { ServiceNavService } from '../../services/service-nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(private NavService: ServiceNavService) { };
  u = this.NavService.getUser();
  g() {
    // if (e)
    console.log("gggggg");
    
      this.u = this.NavService.getUser();
  }

}
