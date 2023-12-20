import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsAddComponent } from './comments-add.component';

describe('CommentsAddComponent', () => {
  let component: CommentsAddComponent;
  let fixture: ComponentFixture<CommentsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
