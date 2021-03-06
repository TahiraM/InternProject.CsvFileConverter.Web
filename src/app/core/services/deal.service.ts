import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deal } from '../model/deal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealService {
  baseUrl = `http://localhost:61686/api/v1`;

  constructor(private http: HttpClient) {}

  getDeals(): Observable<Deal[]> {
    const url = `${this.baseUrl}/Deals`;

    return this.http.get<Deal[]>(url);
  }

  getDealsDetails(id): Observable<Deal> {
    const url = `${this.baseUrl}/Deals/${id}`;

    return this.http.get<Deal>(url);
  }

  saveDealDetails(data): Observable<Deal> {
    const url = `${this.baseUrl}/Deals`;

    return this.http.post<Deal>(url, data);
  }

  deleteDeal(id): Observable<Deal> {
    const url = `${this.baseUrl}/Deals/${id}`;

    return this.http.delete<Deal>(url);
  }
}
