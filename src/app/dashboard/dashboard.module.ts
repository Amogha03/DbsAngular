import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { httpInterceptors } from '../core/interceptors';
import { ProfileService } from '../profiles/services/profile.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardActionComponent } from './components/dashboard-action/dashboard-action.component';
import { ExpModule } from '../exp/exp.module';
import { EduModule } from '../edu/edu.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [DashboardComponent, DashboardActionComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ExpModule,
    EduModule,
    CoreModule,
    DashboardRoutingModule,
  ],
  providers: [httpInterceptors, ProfileService],
})
export class DashboardModule {}
