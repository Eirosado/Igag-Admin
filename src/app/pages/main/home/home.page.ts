import { Component, OnInit, inject} from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateProductComponent } from 'src/app/shared/components/add-update-product/add-update-product.component';
import { User } from 'src/app/models/user.model';
import { Product } from 'src/app/models/product.modul';
import { orderBy, where } from 'firebase/firestore';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  products : Product[] = [];
  loading: boolean = false;

  ngOnInit() {}

  user():User{
    return this.utilsSvc.getFromLocalStorage('user');
  }
  ionViewWillEnter() {
    this.getProducts();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getProducts();
      event.target.complete();
    }, 1000);
  }

  // ========== Get Profit ==========
  getProfit(){
    return this.products.reduce((index, p) => index + (p.price * p.soldUnits), 0);

  }

  // ========== Get Products ==========
  getProducts(){
    let path = `users/${this.user().uid}/products`;

    this.loading = true;

    let query = (
      orderBy('soldUnits', 'desc')
    );


    const sub = this.firebaseSvc.getCollectionData(path, query).subscribe({
      next: (res:any) => {
        console.log(res);
        this.products = res;

        this.loading = false;

        sub.unsubscribe();

      }
    })


  }

  // ========== Add or Update Product ==========

  async addUpdateProduct(product?: Product){
    let success = await this.utilsSvc.presentModal({
      component: AddUpdateProductComponent,
      cssClass: 'add-update-modal',
      componentProps: {product}
    });

    if(success) this.getProducts();

  }

  // ========== Confirm Delete Products ==========
  async deleteProductAlertConfirm(product: Product) {
    this.utilsSvc.presentAlert({
      header: 'Delete Product Confirmation',
      message: 'Are you sure you want to delete this product?',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Yes, delete it!',
          handler: () => {
            this.deleteProduct(product);
          }
        }
      ]
    });


  }

  // ========== Delete Product ==========

  async deleteProduct(product: Product){
    let path = `users/${this.user().uid}/products/${product.id}`;

    const loading = await this.utilsSvc.loading();
    await loading.present();

    let imagePath = await this.firebaseSvc.getFilePath(product.image);
    await this.firebaseSvc.deleteFile(imagePath);

    this.firebaseSvc.deleteDocument(path).then(async res=>{
      this.products = this.products.filter(p => p.id !== product.id);

      this.utilsSvc.presentToast({
        message: `Product Deleted!`,
        duration: 1500,
        color: 'success',
        position: 'middle',
        icon: 'checkmark-circle-outline'
      });

    }).catch(async err=>{
      console.log(err);

      this.utilsSvc.presentToast({
        message: err.message,
        duration: 1500,
        color: 'danger',
        position: 'middle',
        icon: 'alert-circle-outline'
      });

    }).finally(()=>{
      loading.dismiss();

    })
  }

}
