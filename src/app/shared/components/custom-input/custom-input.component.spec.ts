import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomInputComponent } from './custom-input.component';

jest.mock('@angular/core');
jest.mock('@angular/forms');

describe('CustomInputComponent', () => {
  let instance;

  beforeEach(() => {
    instance = new CustomInputComponent();
  });

  it('instance should be an instanceof CustomInputComponent', () => {
    expect(instance instanceof CustomInputComponent).toBeTruthy();
  });

  it('should have a method ngOnInit()', () => {
    // instance.ngOnInit();
    expect(false).toBeTruthy();
  });

  it('should have a method showOrHidePassword()', () => {
    // instance.showOrHidePassword();
    expect(false).toBeTruthy();
  });
});
