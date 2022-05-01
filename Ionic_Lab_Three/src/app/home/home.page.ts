import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myStatus:string = "";
  constructor(private storage:Storage) {}

    ionViewDidEnter(){
      this.storage.create()
      .then(()=>{
        this.storage.get('status')
        .then((status)=>{
          this.myStatus = status;
        })
        .catch();
      })
      .catch();
    }

}
