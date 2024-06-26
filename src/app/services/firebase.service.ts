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

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  utilsSVc = inject(UtilsService);
  storage = inject(AngularFireStorage);

  //========= Authentication =========
  getAuth(){
    return getAuth();
  }

  signIn(user:User){
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  signUp(user:User){
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  updateUser(displayName:string){
    return updateProfile(getAuth().currentUser, {displayName});
  }

  sendRecoveryEmail(email:string){
    return sendPasswordResetEmail(getAuth(), email);
  }

  signOut(){
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSVc.routerLink('/auth');
  }

  //========= DataBase =========
  getCollectionData(path:string, collectionQuery?:any){
    const ref = collection(getFirestore(), path);
    return collectionData(query(ref, collectionQuery),{idField:'id'});
  }
  setDocument(path:string, data:any){
    return setDoc(doc(getFirestore(), path), data);
  }

  updateDocument(path:string, data:any){
    return updateDoc(doc(getFirestore(), path), data);
  }

  deleteDocument(path:string){
    return deleteDoc(doc(getFirestore(), path));
  }

  async getDocunent(path:string){
    return (await getDoc(doc(getFirestore(), path))).data();
  }

  addDocument(path:string, data:any){
    return addDoc(collection(getFirestore(), path), data);
  }

  //========= Storage =========
  async uploadImage(path:string, data_url:string){
    return uploadString(ref(getStorage(), path), data_url, 'data_url').then(()=>{
      return getDownloadURL(ref(getStorage(), path));
    });
  }
  async getFilePath(url:string){
    return ref(getStorage(), url).fullPath;

  }

  deleteFile(path:string){
    return deleteObject(ref(getStorage(), path));
  }

}
