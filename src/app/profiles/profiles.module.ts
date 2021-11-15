import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilesRoutingModule } from './profiles-routing.module';
import { ProfileService } from './services/profile.service';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { httpInterceptors } from '../core/interceptors';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateProfileComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ProfilesRoutingModule],
  providers: [httpInterceptors, ProfileService],
})
export class ProfilesModule {}
