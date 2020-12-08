import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of , Subject, throwError} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { BulletinModel } from '../model/bulletin.model';

const endpoint = 'http://localhost:8080/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class fillformService {

    apiURL:string = ''
    private bulletin: BulletinModel[] = new Array<BulletinModel>();
    constructor(private http:HttpClient){}

    private extractData(res: Response) {
      let body = res;
      return body || { };
    }

   
      getbulletin(): Observable<any> {
        return this.http.get(endpoint + 'bulletin').pipe(
          map(this.extractData),
          catchError(this.handleError<any>('bulletin'))
        );
      }

    

      
      public findbulletin(bulletinId: number): Observable<BulletinModel >{
        return this.http.get<BulletinModel >(endpoint + 'bulletin/'+bulletinId);
      }


  
      private handleError<T> (operation = "operation", result?: T){
        return (error:any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        }
      }

}