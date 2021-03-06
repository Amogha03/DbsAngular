import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  api = '/api/profile';
  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get(this.api);
  }

  createProfile(profile: any): Observable<any> {
    return this.http.post(this.api, profile);
  }

  createExperience(experience: any): Observable<any> {
    return this.http.post(this.api + '/experience', experience);
  }

  deleteExperience(expId: string): Observable<any> {
    return this.http.delete(this.api + '/experience/' + expId);
  }
}
