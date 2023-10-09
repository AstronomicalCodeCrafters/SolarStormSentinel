import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpUrlEncodingCodec, HttpParameterCodec, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

export class FormQueryEncoder implements HttpParameterCodec {
  encodeKey(k: string): string {
    return encodeURIComponent(k);
  }

  encodeValue(v: string): string {
    return encodeURIComponent(v);
  }

  decodeKey(k: string): string {
    return encodeURIComponent(k);
  }

  decodeValue(v: string): string {
    return encodeURIComponent(v);
  }
}

@Injectable({
  providedIn: 'root'
})
export class AppEndpoints {
  private endpoint: string;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.endpoint = "http://" + window.location.hostname + ":8000";
  }

  get_endpoint() {
    return "http://" + window.location.hostname + ":8000";
  }

  get_picture_endpoint(name: string) {
    return this.get_endpoint() + '/images/' + name;
  }

  //########################################################################
  //AUTH ###################################################################

  login(payload: any): Observable<any> {
    let params = new HttpParams({encoder: new FormQueryEncoder()})
      .set('email', payload.email)
      .set('password', payload.password);
    return this.httpClient.get(this.endpoint + "/login_app", {params: params, responseType: 'json'});
  }

  login_ecommerce(payload: any): Observable<any> {
    return this.httpClient.get(this.endpoint + "/login_app", {params: payload, responseType: 'json'});
  }

  register_app(payload: any): Observable<any> {
    return this.httpClient.post(this.endpoint + "/register_app", payload, {responseType: 'json'});
  }

  request_recovery_code(payload: any): Observable<any> {
    return this.httpClient.post(this.endpoint + "/request_recovery_code", payload, {responseType: 'json'});
  }

  validate_recovery_code(payload: any): Observable<any> {
    let params = new HttpParams({encoder: new FormQueryEncoder()})
      .set('id', payload.id)
      .set('user_email', payload.user_email)
      .set('restore_code', payload.restore_code);
    return this.httpClient.get(this.endpoint + "/validate_recovery_code", {params: params, responseType: 'json'});
  }

  request_password_change(payload: any): Observable<any> {
    return this.httpClient.post(this.endpoint + "/request_password_change", payload, {responseType: 'json'});
  }

  request_password_change_first_login(payload: any): Observable<any> {
    return this.httpClient.post(this.endpoint + "/request_password_change_first_login", payload, {responseType: 'json'});
  }

  logout() {
    this.reset_session();
  }

  get_session() {
    let session: any = localStorage.getItem('theluxe_session')
    if (session) {
      var object = JSON.parse(session);
      if (object) {
        return {
          valid: true,
          id: object.id,
          name: object.name,
          role: object.role,
          email: object.email,
          phone: object.phone,
          photo: object.photo,
          address: object.address,
          postalCode: object.postalCode,
          token: object.token,

        };
      } else {
        return {
          valid: false,
          id: "",
          name: "",
          role: "",
          email: "",
          phone: "",
          photo: "",
          address: "",
          postalCode: "",
          token: object.token,
        };
      }
    } else {
      return {
        valid: false,
        id: "",
        name: "",
        role: "",
        email: "",
        phone: "",
        photo: "",
        address: "",
        stalCode: "",
        token: null,
      };
    }
  }

  set_session(session: any) {
    localStorage.setItem('theluxe_session', JSON.stringify(session));
  }

  reset_session() {
    this.router.navigateByUrl('/ingresar');
    localStorage.removeItem('theluxe_session');
  }

  //AUTH ###################################################################
  //########################################################################

  //########################################################################
  //PAY ####################################################################
  get_predict_kp(payload: any): Observable<any> {
    console.log("4")
    return this.httpClient.get(this.endpoint + "/predict_kp", {params: payload, responseType: 'json'});
  }
  
  get_kp(): Observable<any> {
    return this.httpClient.get(this.endpoint + "/get_kp", {responseType: 'json'});
  }
  
  //PAY ####################################################################
  //########################################################################
  
  //########################################################################
  //PAY ####################################################################

  get_method_payments(payload: any): Observable<any> {
    return this.httpClient.get(this.endpoint + "/get_method_payments", {params: payload, responseType: 'json'});
  }

  get_buyed_items(payload: any): Observable<any> {
    return this.httpClient.get(this.endpoint + "/get_buyed_items", {params: payload, responseType: 'json'});
  }

  //PAY ###################################################################
  //#######################################################################


  update_user(payload: any): Observable<any> {
    return this.httpClient.put(this.endpoint + "/update_user", payload, {responseType: 'json'});
  }

  delete_user(payload: any): Observable<any> {
    return this.httpClient.delete(this.endpoint + "/delete_user", {params: payload, responseType: 'json'});
  }
}

