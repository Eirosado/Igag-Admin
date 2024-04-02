import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { HeaderComponent } from './header.component';

jest.mock('@angular/core');
jest.mock('src/app/services/utils.service');

describe('HeaderComponent', () => {
  let instance;

  beforeEach(() => {
    instance = new HeaderComponent();
  });

  it('instance should be an instanceof HeaderComponent', () => {
    expect(instance instanceof HeaderComponent).toBeTruthy();
  });

  it('should have a method ngOnInit()', () => {
    // instance.ngOnInit();
    expect(false).toBeTruthy();
  });

  it('should have a method dissmissModal()', () => {
    // instance.dissmissModal();
    expect(false).toBeTruthy();
  });
});
