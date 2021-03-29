/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HocViComponent } from './hoc-vi.component';

describe('HocViComponent', () => {
    let component: HocViComponent;
    let fixture: ComponentFixture<HocViComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HocViComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HocViComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
