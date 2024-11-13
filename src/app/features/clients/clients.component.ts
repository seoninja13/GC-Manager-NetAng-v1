import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Client } from '../../core/models';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  template: `
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Clients</h1>
        <button (click)="isModalOpen = true" class="btn btn-primary">
          Add Client
        </button>
      </div>

      <div class="bg-white shadow-sm rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr *ngFor="let client of clients">
              <td class="px-6 py-4 whitespace-nowrap">{{ client.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ client.email }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ client.phone }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ client.address }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button class="text-indigo-600 hover:text-indigo-900">Edit</button>
                <button class="ml-4 text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class ClientsComponent {
  isModalOpen = false;
  clientForm: FormGroup;
  clients: Client[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '(555) 123-4567',
      address: '123 Main Street, Anytown, ST 12345',
      createdAt: new Date('2023-01-15')
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '(555) 987-6543',
      address: '456 Oak Avenue, Somewhere, ST 67890',
      createdAt: new Date('2023-03-22')
    },
    {
      id: '3',
      name: 'Robert Johnson',
      email: 'robert.j@example.com',
      phone: '(555) 456-7890',
      address: '789 Pine Road, Elsewhere, ST 34567',
      createdAt: new Date('2023-06-10')
    }
  ];

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      name: ['', []],
      email: ['', []],
      phone: ['', []],
      address: ['', []]
    });
  }
}