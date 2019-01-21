import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MetierprochePage } from './metierproche';
import { MetierprocheProvider } from '../../providers/metierproche/metierproche';
@NgModule({
  declarations: [
    MetierprochePage,
  ],
  imports: [
    IonicPageModule.forChild(MetierprochePage),
  ],
  providers: [
    MetierprocheProvider
  ],
})
export class MetierprochePageModule {}
