import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside class="fixed inset-y-0 left-0 bg-gray-800 w-64 flex flex-col">
      <div class="flex items-center justify-center h-16 bg-gray-900">
        <span class="text-white text-lg font-semibold">GC Manager</span>
      </div>
      
      <nav class="flex-1 overflow-y-auto">
        <ul class="py-4">
          <li>
            <a routerLink="/dashboard" 
               routerLinkActive="bg-gray-900 text-white"
               class="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700">
              <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a routerLink="/clients" 
               routerLinkActive="bg-gray-900 text-white"
               class="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700">
              <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
              Clients
            </a>
          </li>
          <li>
            <a routerLink="/estimates" 
               routerLinkActive="bg-gray-900 text-white"
               class="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700">
              <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
              Estimates
            </a>
          </li>
          <li>
            <a routerLink="/invoices" 
               routerLinkActive="bg-gray-900 text-white"
               class="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700">
              <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
              Invoices
            </a>
          </li>
          <li>
            <a routerLink="/jobs" 
               routerLinkActive="bg-gray-900 text-white"
               class="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700">
              <svg class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Jobs
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  `
})
export class SidebarComponent {}