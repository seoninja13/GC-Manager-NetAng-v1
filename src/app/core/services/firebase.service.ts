import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, updateDoc, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Client, Invoice, Estimate, Job } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: Firestore) {}

  // Generic add document method
  async addDocument<T>(collectionName: string, data: T): Promise<string> {
    const collectionRef = collection(this.firestore, collectionName);
    const docRef = await addDoc(collectionRef, data);
    return docRef.id;
  }

  // Generic update document method
  async updateDocument<T>(collectionName: string, id: string, data: Partial<T>): Promise<void> {
    const docRef = doc(this.firestore, collectionName, id);
    await updateDoc(docRef, data as any);
  }

  // Generic delete document method
  async deleteDocument(collectionName: string, id: string): Promise<void> {
    const docRef = doc(this.firestore, collectionName, id);
    await deleteDoc(docRef);
  }
}