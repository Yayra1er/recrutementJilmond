// gestionnaire-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { JobOfferService } from '../services/job-offer.service';

@Component({
  selector: 'app-gestionnaire-dashboard',
  templateUrl: './gestionnaire-dashboard.component.html',
  styleUrls: ['./gestionnaire-dashboard.component.scss']
})
export class GestionnaireDashboardComponent implements OnInit {
  jobOffers: any[] = [];
  newOffer: any = {
    // Propriétés de la nouvelle offre
  };

  constructor(private jobOfferService: JobOfferService) {}

  ngOnInit(): void {
    this.loadJobOffers();
  }

  loadJobOffers(): void {
    this.jobOfferService.getJobOffers().subscribe((offers) => {
      this.jobOffers = offers;
    });
  }

  addJobOffer(): void {
    this.jobOfferService.addJobOffer(this.newOffer).subscribe(() => {
      this.loadJobOffers();
      this.newOffer = {}; // Réinitialisez le formulaire d'ajout
    });
  }

  deleteJobOffer(offerId: number): void {
    this.jobOfferService.deleteJobOffer(offerId).subscribe(() => {
      this.loadJobOffers();
    });
  }
}
