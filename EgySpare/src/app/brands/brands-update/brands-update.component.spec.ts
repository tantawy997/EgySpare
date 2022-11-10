import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsUpdateComponent } from './brands-update.component';

describe('BrandsUpdateComponent', () => {
  let component: BrandsUpdateComponent;
  let fixture: ComponentFixture<BrandsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
