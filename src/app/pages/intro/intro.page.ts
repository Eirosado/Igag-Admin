import { Component, OnInit, inject } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  utilsSVc = inject(UtilsService);


  ngOnInit() {
    setTimeout(() => {
      this.utilsSVc.routerLink('/auth');
    },1500);
  }

}
