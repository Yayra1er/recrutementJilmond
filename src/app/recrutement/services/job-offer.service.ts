// job-offer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {
  private apiUrl = 'URL_DE_VOTRE_BACKEND'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) {}

  getJobOffers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/job-offers`);
  }

  addJobOffer(offer: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/job-offers`, offer);
  }

  deleteJobOffer(offerId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/job-offers/${offerId}`);
  }
}

import { JobOffer } from '../interface/job-offer';

// Utilisez le modèle JobOffer pour typer vos données
const offre: JobOffer = {
  id: 1,
  title: 'Titre de l\'offre',
  description: 'Description de l\'offre',
  requirements: ['Exigence 1', 'Exigence 2'],
  // Autres propriétés
};
