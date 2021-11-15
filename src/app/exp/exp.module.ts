import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpRoutingModule } from './exp-routing.module';
import { DisplayExpComponent } from './components/display-exp/display-exp.component';
import { AddExpComponent } from './components/add-exp/add-exp.component';
import { AddEduComponent } from './components/add-edu/add-edu.component';
import { ProfileService } from '../profiles/services/profile.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptors } from '../core/interceptors';

@NgModule({
  declarations: [DisplayExpComponent, AddExpComponent, AddEduComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, ExpRoutingModule],
  exports: [DisplayExpComponent],
  providers: [ProfileService, httpInterceptors],
})
export class ExpModule {}
