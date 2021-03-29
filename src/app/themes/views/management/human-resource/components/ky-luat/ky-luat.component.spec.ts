import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyLuatComponent } from './ky-luat.component';

describe('KyLuatComponent', () => {
    let component: KyLuatComponent;
    let fixture: ComponentFixture<KyLuatComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [KyLuatComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(KyLuatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
