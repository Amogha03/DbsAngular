import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EduRoutingModule } from './edu-routing.module';
import { DisplayEduComponent } from './components/display-edu/display-edu.component';

@NgModule({
  declarations: [DisplayEduComponent],
  imports: [CommonModule, EduRoutingModule],
  exports: [DisplayEduComponent],
})
export class EduModule {}
