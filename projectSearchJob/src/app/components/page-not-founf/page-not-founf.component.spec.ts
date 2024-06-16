import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFounfComponent } from './page-not-founf.component';

describe('PageNotFounfComponent', () => {
  let component: PageNotFounfComponent;
  let fixture: ComponentFixture<PageNotFounfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageNotFounfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageNotFounfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
