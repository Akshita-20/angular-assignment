import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Category } from '../siteframework/category';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
   private _url="http://localhost:3000/products";

  constructor(private http:HttpClient) { }

 addProduct(productBody): Observable<Product>{
   return this.http.post<Product>(this._url,productBody);
 }
  
 updateProduct(productId, productBody): Observable<Product>{
  const _url="http://localhost:3000/products" +productId;
   return this.http.put<Product>(_url, productBody);
 }

 deleteProduct(productId): Observable<Product>{
  const _url="http://localhost:3000/products" +productId;
   return this.http.delete<Product>(_url);
 }
 
 viewAllProduct(): Observable<Product>{
   return this.http.get<Product>(this._url);
 }

 getcategory(): Observable<Category>{
  const categories = 'http://localhost:3000/categories';
  return this.http.get<Category>(categories);
 }



}
