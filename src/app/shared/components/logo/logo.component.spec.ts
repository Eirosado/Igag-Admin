import { Component, OnInit } from '@angular/core';
import { LogoComponent } from './logo.component';

jest.mock('@angular/core');

describe('LogoComponent', () => {
  let instance;

  beforeEach(() => {
    instance = new LogoComponent();
  });

  it('instance should be an instanceof LogoComponent', () => {
    expect(instance instanceof LogoComponent).toBeTruthy();
  });

  it('should have a method ngOnInit()', () => {
    // instance.ngOnInit();
    expect(false).toBeTruthy();
  });
});
