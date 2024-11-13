import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Invoice } from '../../core/models';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  template: `
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Invoices</h1>
        <button (click)="isModalOpen = true" class="btn btn-primary">
          Create Invoice
        </button>
      </div>

      <div class="bg-white shadow-sm rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr *ngFor="let invoice of invoices">
              <td class="px-6 py-4 whitespace-nowrap">{{ invoice.number }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ invoice.date | date }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ invoice.dueDate | date }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ invoice.total | currency }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span [ngClass]="{
                  'bg-green-100 text-green-800': invoice.status === 'paid',
                  'bg-yellow-100 text-yellow-800': invoice.status === 'sent',
                  'bg-red-100 text-red-800': invoice.status === 'overdue'
                }" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                  {{ invoice.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button class="text-indigo-600 hover:text-indigo-900">Edit</button>
                <button class="ml-4 text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <app-modal
        [isOpen]="isModalOpen"
        [title]="'Create Invoice'"
        (close)="isModalOpen = false"
      >
        <form [formGroup]="invoiceForm" class="space-y-4">
          <!-- Form fields will go here -->
        </form>
      </app-modal>
    </div>
  `
})
export class InvoicesComponent {
  isModalOpen = false;
  invoiceForm: FormGroup;
  invoices: Invoice[] = [
    {
      id: '1',
      number: 'INV-001',
      clientId: '1',
      date: new Date('2023-11-01'),
      dueDate: new Date('2023-11-15'),
      items: [
        {
          description: 'Labor Hours',
          quantity: 40,
          rate: 75,
          amount: 3000
        },
        {
          description: 'Materials',
          quantity: 1,
          rate: 1500,
          amount: 1500
        }
      ],
      total: 4500,
      status: 'sent'
    },
    {
      id: '2',
      number: 'INV-002',
      clientId: '2',
      date: new Date('2023-11-05'),
      dueDate: new Date('2023-11-19'),
      items: [
        {
          description: 'Bathroom Renovation',
          quantity: 1,
          rate: 8500,
          amount: 8500
        }
      ],
      total: 8500,
      status: 'paid'
    },
    {
      id: '3',
      number: 'INV-003',
      clientId: '1',
      date: new Date('2023-10-15'),
      dueDate: new Date('2023-10-29'),
      items: [
        {
          description: 'Kitchen Cabinet Installation',
          quantity: 1,
          rate: 3200,
          amount: 3200
        },
        {
          description: 'Custom Countertops',
          quantity: 1,
          rate: 4800,
          amount: 4800
        }
      ],
      total: 8000,
      status: 'overdue'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.invoiceForm = this.fb.group({
      clientId: ['', []],
      date: ['', []],
      dueDate: ['', []],
      items: this.fb.array([])
    });
  }
}