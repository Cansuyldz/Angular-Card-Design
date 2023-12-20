import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsAddComponent } from './albums-add.component';

describe('AlbumsAddComponent', () => {
  let component: AlbumsAddComponent;
  let fixture: ComponentFixture<AlbumsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
