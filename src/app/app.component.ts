import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'person'
    },
    {
      title: 'List Product',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'keranjang',
      url: '/keranjang',
      icon: 'cart'
    },
    {
      title: 'tambah produk',
      url: '/tambahproduk',
      icon: 'add-circle'
    },
    {
      title: 'artikel',
      url: '/artikel',
      icon: 'paper'
    },
    {
      title: 'daftar komentar',
      url: '/daftarkomentar',
      icon: 'list-box'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'Settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
