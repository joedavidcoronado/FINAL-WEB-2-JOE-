import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailLugarPage } from './detail-lugar.page';

describe('DetailLugarPage', () => {
  let component: DetailLugarPage;
  let fixture: ComponentFixture<DetailLugarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLugarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
