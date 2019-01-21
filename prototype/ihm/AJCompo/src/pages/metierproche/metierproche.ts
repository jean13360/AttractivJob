import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MetierprocheProvider} from '../../providers/metierproche/metierproche'
/**
 * Generated class for the MetierprochePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-metierproche',
  templateUrl: 'metierproche.html',
})
export class MetierprochePage {
  pet = "metier"
  constructor(public navCtrl: NavController, public navParams: NavParams, private metierproche: MetierprocheProvider) {
    this.metierproche.Get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MetierprochePage');
  }

}
