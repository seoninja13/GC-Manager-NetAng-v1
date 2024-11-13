import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Estimate } from '../../core/models';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-estimates',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  template: `
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Estimates</h1>
        <button (click)="isModalOpen = true" class="btn btn-primary">
          Create Estimate
        </button>
      </div>

      <div class="bg-white shadow-sm rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valid Until</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr *ngFor="let estimate of estimates">
              <td class="px-6 py-4 whitespace-nowrap">{{ estimate.number }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ estimate.date | date }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ estimate.validUntil | date }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ estimate.total | currency }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span [ngClass]="{
                  'bg-green-100 text-green-800': estimate.status === 'accepted',
                  'bg-yellow-100 text-yellow-800': estimate.status === 'sent',
                  'bg-red-100 text-red-800': estimate.status === 'rejected'
                }" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                  {{ estimate.status }}
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
        [title]="'Create Estimate'"
        (close)="isModalOpen = false"
      >
        <form [formGroup]="estimateForm" class="space-y-4">
          <!-- Form fields will go here -->
        </form>
      </app-modal>
    </div>
  `
})
export class EstimatesComponent {
  isModalOpen = false;
  estimateForm: FormGroup;
  estimates: Estimate[] = [
    {
      id: '1',
      number: 'EST-001',
      clientId: '1',
      date: new Date('2023-11-10'),
      validUntil: new Date('2023-12-10'),
      items: [
        {
          description: 'Complete Kitchen Remodel',
          quantity: 1,
          rate: 25000,
          amount: 25000
        },
        {
          description: 'Appliance Installation',
          quantity: 1,
          rate: 2500,
          amount: 2500
        }
      ],
      total: 27500,
      status: 'sent'
    },
    {
      id: '2',
      number: 'EST-002',
      clientId: '2',
      date: new Date('2023-11-08'),
      validUntil: new Date('2023-12-08'),
      items: [
        {
          description: 'Deck Construction',
          quantity: 1,
          rate: 12000,
          amount: 12000
        },
        {
          description: 'Outdoor Lighting Installation',
          quantity: 1,
          rate: 1500,
          amount: 1500
        }
      ],
      total: 13500,
      status: 'accepted'
    },
    {
      id: '3',
      number: 'EST-003',
      clientId: '1',
      date: new Date('2023-11-01'),
      validUntil: new Date('2023-12-01'),
      items: [
        {
          description: 'Bathroom Renovation',
          quantity: 1,
          rate: 15000,
          amount: 15000
        }
      ],
      total: 15000,
      status: 'rejected'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.estimateForm = this.fb.group({
      clientId: ['', []],
      date: ['', []],
      validUntil: ['', []],
      items: this.fb.array([])
    });
  }
}