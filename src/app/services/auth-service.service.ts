// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
// import { User } from '../interfaces/user';
// import { ErrorHandlerServiceService } from './error-handler-service.service';
// import { LocalStorageService } from './local-storage.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthServiceService {

//   constructor(public http : HttpClient, public localStorageService : LocalStorageService, public errorHandlerService: ErrorHandlerServiceService) { }

//   signup(data): Observable<any> {
//     return this.http.post<any>(`${environment.apiUrl}/user/register`, data).pipe(
//       tap(res => {
//         this.localStorageService.setTokens(res.accessToken, res.refreshToken);
//       }),
//       catchError(err => this.errorHandlerService.handleError(err))
//     )
//   }

//   login(data): Observable<any> {
//     return this._http.post<any>(`${environment.apiUrl}/user/login`, data)
//     .pipe(
//       tap(res => {
//         this.localStorageService.setTokens(res.accessToken, res.refreshToken);
//         this.$User.next(res.user);
//       }),
//       catchError(err => this.errorHandlerService.handleError(err))
//     )
//   }

//   logout() {
//     this.localStorageService.clearTokens();
//     this.$User.next(null);
//   }

//   fetchUserData(): Observable<any> {
//     return this._http.get<any>(`${environment.apiUrl}/user/me`)
//     .pipe(
//       tap(res => {
//         this.$User.next({
//           _id: res._id,
//           first_name: res.first_name,
//           role: res.role
//         })
//       }),
//       catchError(err => this.errorHandlerService.handleError(err))
//     )
//   }
// }
