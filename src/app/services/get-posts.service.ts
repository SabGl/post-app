import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

export interface IPost {
  "userId": number,
  "id": number,
  "title": string,
  "body": string,
}

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {

  // public basePostUrl =  'https://jsonplaceholder.typicode.com'

  constructor(private httpClient: HttpClient) {
  }


  public getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
  }

  public getPost(id:number): Observable<IPost>{
    return this.httpClient.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}

