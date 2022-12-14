import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/Models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands-create',
  templateUrl: './brands-create.component.html',
  styleUrls: ['./brands-create.component.css'],
})
export class BrandsCreateComponent implements OnInit {
  nbrand: Brand = new Brand(0, '', '');

  constructor(public brandServices: BrandService, public router: Router) {}
  save() {
    this.brandServices.addbrand(this.nbrand).subscribe((a) => {
      console.log(a);
      this.router.navigateByUrl('/admin/brand/list');
    });
  }
  back() {
    this.router.navigateByUrl('/admin/brand/list');
  }

  onselectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.nbrand.imgPath = event.target.result;
      };
    }
  }

  ngOnInit(): void {}
}
