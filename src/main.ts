import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app/app.component';
import { DashboardComponent } from './app/features/dashboard/dashboard.component';
import { ClientsComponent } from './app/features/clients/clients.component';
import { LoginComponent } from './app/features/auth/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'clients', component: ClientsComponent },
  { 
    path: 'estimates',
    loadComponent: () => import('./app/features/estimates/estimates.component')
      .then(m => m.EstimatesComponent)
  },
  { 
    path: 'invoices',
    loadComponent: () => import('./app/features/invoices')
      .then(m => m.InvoicesComponent)
  },
  { 
    path: 'jobs',
    loadComponent: () => import('./app/features/jobs/jobs.component')
      .then(m => m.JobsComponent)
  }
];

const firebaseConfig = {
  apiKey: "AIzaSyD9Xckvvz2pykh6smWOyRzGpsJ1rsJeKCU",
  authDomain: "gc-manager-25040.firebaseapp.com",
  projectId: "gc-manager-25040",
  storageBucket: "gc-manager-25040.firebasestorage.app",
  messagingSenderId: "126635326126",
  appId: "1:126635326126:web:26cbd68ccce19e21658b3f"
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore())
    )
  ]
});