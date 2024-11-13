import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gray-100">
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <!-- Quick Stats -->
              <div class="card">
                <h3 class="text-lg font-medium text-gray-900">Active Projects</h3>
                <p class="mt-2 text-3xl font-bold text-blue-600">5</p>
                <p class="mt-1 text-sm text-gray-500">2 starting this week</p>
              </div>
              <div class="card">
                <h3 class="text-lg font-medium text-gray-900">Pending Estimates</h3>
                <p class="mt-2 text-3xl font-bold text-yellow-600">3</p>
                <p class="mt-1 text-sm text-gray-500">$45,500 total value</p>
              </div>
              <div class="card">
                <h3 class="text-lg font-medium text-gray-900">Unpaid Invoices</h3>
                <p class="mt-2 text-3xl font-bold text-red-600">4</p>
                <p class="mt-1 text-sm text-gray-500">$12,300 outstanding</p>
              </div>
              <div class="card">
                <h3 class="text-lg font-medium text-gray-900">Total Clients</h3>
                <p class="mt-2 text-3xl font-bold text-green-600">12</p>
                <p class="mt-1 text-sm text-gray-500">2 new this month</p>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <h2 class="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
                <div class="card">
                  <div class="divide-y divide-gray-200">
                    <div class="py-4">
                      <p class="text-sm text-gray-900">New estimate #EST-004 created for Kitchen Remodel</p>
                      <p class="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                    <div class="py-4">
                      <p class="text-sm text-gray-900">Invoice #INV-002 paid by Jane Smith</p>
                      <p class="text-xs text-gray-500 mt-1">5 hours ago</p>
                    </div>
                    <div class="py-4">
                      <p class="text-sm text-gray-900">New client Robert Johnson added</p>
                      <p class="text-xs text-gray-500 mt-1">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 class="text-lg font-medium text-gray-900 mb-4">Upcoming Jobs</h2>
                <div class="card">
                  <div class="divide-y divide-gray-200">
                    <div class="py-4">
                      <p class="text-sm font-medium text-gray-900">Deck Construction</p>
                      <p class="text-xs text-gray-500 mt-1">Starting Nov 20, 2023</p>
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mt-2">
                        Medium Priority
                      </span>
                    </div>
                    <div class="py-4">
                      <p class="text-sm font-medium text-gray-900">Basement Finishing</p>
                      <p class="text-xs text-gray-500 mt-1">Starting Dec 1, 2023</p>
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mt-2">
                        Low Priority
                      </span>
                    </div>
                    <div class="py-4">
                      <p class="text-sm font-medium text-gray-900">Kitchen Renovation</p>
                      <p class="text-xs text-gray-500 mt-1">In Progress</p>
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mt-2">
                        High Priority
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `
})
export class DashboardComponent {}