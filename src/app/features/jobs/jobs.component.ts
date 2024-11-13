import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Job } from '../../core/models';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  template: `
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Jobs</h1>
        <button (click)="isModalOpen = true" class="btn btn-primary">
          Create Job
        </button>
      </div>

      <div class="bg-white shadow-sm rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr *ngFor="let job of jobs">
              <td class="px-6 py-4 whitespace-nowrap">{{ job.title }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ job.startDate | date }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ job.endDate | date }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span [ngClass]="{
                  'bg-green-100 text-green-800': job.status === 'completed',
                  'bg-yellow-100 text-yellow-800': job.status === 'in-progress',
                  'bg-blue-100 text-blue-800': job.status === 'scheduled',
                  'bg-red-100 text-red-800': job.status === 'cancelled'
                }" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                  {{ job.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span [ngClass]="{
                  'bg-red-100 text-red-800': job.priority === 'high',
                  'bg-yellow-100 text-yellow-800': job.priority === 'medium',
                  'bg-blue-100 text-blue-800': job.priority === 'low'
                }" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">
                  {{ job.priority }}
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
    </div>
  `
})
export class JobsComponent {
  isModalOpen = false;
  jobForm: FormGroup;
  jobs: Job[] = [
    {
      id: '1',
      clientId: '1',
      title: 'Kitchen Renovation',
      description: 'Complete kitchen renovation including cabinets, countertops, and appliance installation',
      startDate: new Date('2023-11-15'),
      endDate: new Date('2023-12-15'),
      status: 'in-progress',
      priority: 'high'
    },
    {
      id: '2',
      clientId: '2',
      title: 'Deck Construction',
      description: 'Build new 400 sq ft composite deck with railings and stairs',
      startDate: new Date('2023-11-20'),
      status: 'scheduled',
      priority: 'medium'
    },
    {
      id: '3',
      clientId: '1',
      title: 'Bathroom Remodel',
      description: 'Master bathroom remodel with new fixtures, tile, and vanity',
      startDate: new Date('2023-10-01'),
      endDate: new Date('2023-10-25'),
      status: 'completed',
      priority: 'medium'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.jobForm = this.fb.group({
      title: ['', []],
      description: ['', []],
      startDate: ['', []],
      endDate: ['', []],
      priority: ['medium', []],
      status: ['scheduled', []]
    });
  }
}