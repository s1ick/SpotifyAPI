import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 

  }
  caberceras: HttpHeaders = new HttpHeaders({
   'Authorization': 'Bearer BQC2V5OT1tnYotih-jJOLOszokDsjrFWbO18zQUgrss9XEbFC5MuDd663bNDf4owvIp_Itvs6ggTNeKqU9bCUbAGfQw4i69Xb0kUaTVViJCkoeMX6HQyOahi05CIwsLvuWyaDPCNkENDvc-QdWEV1YbnbMe6veuV4oKfsUuYcOhrB1dNjyU'
  });
  getNewReleases()  {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers: this.caberceras});
  }
}
