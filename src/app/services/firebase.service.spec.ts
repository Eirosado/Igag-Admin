import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,updateProfile, sendPasswordResetEmail} from 'firebase/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, query, updateDoc, deleteDoc} from 'firebase/firestore';
import { UtilsService } from './utils.service';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import { getStorage, uploadString, ref, getDownloadURL, deleteObject } from 'firebase/storage';
import { collectionData } from 'rxfire/firestore';
import { FirebaseService } from './firebase.service';

jest.mock('@angular/core');
jest.mock('@angular/fire/compat/auth');
jest.mock('firebase/auth');
jest.mock('../models/user.model');
jest.mock('@angular/fire/compat/firestore');
jest.mock('firebase/firestore');
jest.mock('./utils.service');
jest.mock('@angular/fire/compat/storage');
jest.mock('firebase/storage');
jest.mock('rxfire/firestore');

describe('FirebaseService', () => {
  let instance;

  beforeEach(() => {
    instance = new FirebaseService();
  });

  it('instance should be an instanceof FirebaseService', () => {
    expect(instance instanceof FirebaseService).toBeTruthy();
  });

  it('should have a method getAuth()', () => {
    // instance.getAuth();
    expect(false).toBeTruthy();
  });

  it('should have a method signIn()', () => {
    // instance.signIn(user);
    expect(false).toBeTruthy();
  });

  it('should have a method signUp()', () => {
    // instance.signUp(user);
    expect(false).toBeTruthy();
  });

  it('should have a method updateUser()', () => {
    // instance.updateUser(displayName);
    expect(false).toBeTruthy();
  });

  it('should have a method sendRecoveryEmail()', () => {
    // instance.sendRecoveryEmail(email);
    expect(false).toBeTruthy();
  });

  it('should have a method signOut()', () => {
    // instance.signOut();
    expect(false).toBeTruthy();
  });

  it('should have a method getCollectionData()', () => {
    // instance.getCollectionData(path,collectionQuery);
    expect(false).toBeTruthy();
  });

  it('should have a method setDocument()', () => {
    // instance.setDocument(path,data);
    expect(false).toBeTruthy();
  });

  it('should have a method updateDocument()', () => {
    // instance.updateDocument(path,data);
    expect(false).toBeTruthy();
  });

  it('should have a method deleteDocument()', () => {
    // instance.deleteDocument(path);
    expect(false).toBeTruthy();
  });

  it('should have a method getDocunent()', async () => {
    // await instance.getDocunent(path);
    expect(false).toBeTruthy();
  });

  it('should have a method addDocument()', () => {
    // instance.addDocument(path,data);
    expect(false).toBeTruthy();
  });

  it('should have a method uploadImage()', async () => {
    // await instance.uploadImage(path,data_url);
    expect(false).toBeTruthy();
  });

  it('should have a method getFilePath()', async () => {
    // await instance.getFilePath(url);
    expect(false).toBeTruthy();
  });

  it('should have a method deleteFile()', () => {
    // instance.deleteFile(path);
    expect(false).toBeTruthy();
  });
});
