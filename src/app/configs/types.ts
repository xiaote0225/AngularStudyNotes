import { InjectionToken } from "@angular/core";

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
