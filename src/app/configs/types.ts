import { InjectionToken } from "@angular/core";

export interface Base<T>{
  code:number;
  message:string;
  data?:T;
}

export interface HeroArg {
  name: string;
  job: string;
  sort: 'desc' | 'asc';
}

export interface Hero {
  id: string;
  name: string;
  phone: number;
  createTime: number;
  gender: string;
  genderText: string;
  job: string;
  jobText: string;
  role: string;
  age?: number;
  email?: string;
  brief?: string;
}


export interface AppConfig{
  apiEndpoint:string;
  title:string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface LoginType{
  user:Hero;
  token:string;
}

export interface LoginArg{
  name:string;
  password:string;
}

export type UpdateHeroArg = Omit<Hero ,'id' | 'createTime' | 'genderText' | 'jobText'>;
