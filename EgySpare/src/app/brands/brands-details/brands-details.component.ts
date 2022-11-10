import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/Models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands-details',
  templateUrl: './brands-details.component.html',
  styleUrls: ['./brands-details.component.css'],
})
export class BrandsDetailsComponent implements OnInit {
  constructor(public brandser: BrandService, public router: Router) {}

  ngOnInit() {}
}
