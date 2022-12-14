import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/Models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brands-update',
  templateUrl: './brands-update.component.html',
  styleUrls: ['./brands-update.component.css'],
})
export class BrandsUpdateComponent implements OnInit {
  brand: Brand = new Brand(0, '', '');
  id: number = 0;
  constructor(
    public brandser: BrandService,
    public router: Router,
    public ar: ActivatedRoute
  ) {}

  save() {
    this.brandser.updatebrand(this.brand).subscribe((a) => {
      console.log(a), this.router.navigateByUrl('/admin/brand/list');
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
        this.brand.imgPath = event.target.result;
      };
    }
  }

  ngOnInit() {
    this.ar.params.subscribe((a) => {
      let id = a['id'];
      this.brandser.getBrandById(id).subscribe((c) => {
        this.brand = c;
      });
    });
  }
}
