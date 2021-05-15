import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports : [
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
        loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]

        }})]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('checkLogin should return true if loggedin', () => {
    localStorage.setItem('isLoggedIn', 'Yes');
    const checkLogin = component.checkLogin();
    expect(checkLogin).toBe(true);
  });

  it('buttonEnableFlag should false if not searchString', () => {
    component.searchString = '';
    component.buttonEnable();
    expect(component.buttonEnableFlag).toBe(false);
  });

  it('buttonEnableFlag should true if searchString', () => {
    component.searchString = 'abc';
    component.buttonEnable();
    expect(component.buttonEnableFlag).toBe(true);
  });

  it('isLoggedin flag should false if logout', () => {
    component.logout();
    expect(component.isLoggedIn).toBe(false);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
