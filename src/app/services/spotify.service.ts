import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { 
  }
  caberceras: HttpHeaders = new HttpHeaders({
   'Authorization': 'Bearer BQCPSOoPRQKWlbOo89Rdmhf8B8ZX4XJBabIWHCiJPkvoOghwm8fybZsBtmIW3ukahJT-u2PiNhdVQbFKLYJ24_rORo9k1ZhTn4TsHt0AmOPrDN23FiTjdaWYE7WyeH47bp7b_UnXivZ87JYp6ZO8SPTLhwL-t-Cl_5SyfVOqi8IKxQup5Hg'
  });
  
  getNewReleases()  {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=RU&locale=ru-RU%2Cru%3Bq%3D0.9%2Cen-US%3Bq%3D0.8%2Cen%3Bq%3D0.7&offset=0&limit=20', {headers: this.caberceras});
  }
}
