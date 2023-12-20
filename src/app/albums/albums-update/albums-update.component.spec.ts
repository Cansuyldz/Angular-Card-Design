import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsUpdateComponent } from './albums-update.component';

describe('AlbumsUpdateComponent', () => {
  let component: AlbumsUpdateComponent;
  let fixture: ComponentFixture<AlbumsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
