import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeshowroomService {
  private backgroundChangeInterval!: Subscription;
  private currentIndex = 0;
  private imageUrls: string[] = [];
  private preloadedImages: HTMLImageElement[] = [];

  constructor() {
    this.imageUrls = [
      "https://www.topgear.com/sites/default/files/news-listicle/image/6buyingachironjuly2016.jpg",
      "https://www.topgear.com/sites/default/files/images/news-article/2020/11/86d1c7742a1e093a83487debca97eecd/20c0535_179.jpg",
      "https://ocdn.eu/pulscms-transforms/1/J1Ek9kpTURBXy80MWNkMTFjMTI0NWVmY2ZiMmNhNmZiZDRkNjQ5ODZiMS5qcGeSlQMAAM0PoM0IypMFzQSwzQKk3gACoTAFoTEA",
      "https://mediaassets.pca.org/pages/pca/images/content/img_9(3).jpg",
      "https://wallpapercave.com/wp/wp7359234.jpg",
      "https://images3.alphacoders.com/212/212867.jpg",
      "https://i.gremicdn.pl/image/free/e5225bb65cb478cc2879bc07a1887da6/?t=crop:1600:992:nowe:0:66,resize:fill:1200:716,enlarge:1",
      "https://www.hdcarwallpapers.com/walls/2017_aston_martin_vanquish_s-HD.jpg",
      "https://wallpapers.com/images/featured/f1-hfubqbf4vngbuqur.jpg",
      "https://carsales.pxcrush.net/carsales//car/dealer/bb39fdc48984a3fff6df5ec916451cf6.jpg",
      "https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/l0cwn2uquu5n6kl3eow1",
      "https://img.redbull.com/images/c_crop,w_6000,h_3000,x_0,y_386,f_auto,q_auto/c_scale,w_1200/redbullcom/2022/2/9/pdjsfsha7fpscr0dhpt4/new-car-new-name",
      "/assets/images/bg1.jpg",
    ];

    this.preloadImages();
  }

  private preloadImages() {
    this.imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      this.preloadedImages.push(img);
    });
  }

  startBackgroundChangeInterval(callback: (url: string) => void, intervalTime: number = 5000) {
    this.backgroundChangeInterval = interval(intervalTime).subscribe(() => {
      this.changeBackgroundImage(callback);
    });
  }

  stopBackgroundChangeInterval() {
    if (this.backgroundChangeInterval) {
      this.backgroundChangeInterval.unsubscribe();
    }
  }

  private changeBackgroundImage(callback: (url: string) => void) {
    const nextIndex = (this.currentIndex + 1) % this.imageUrls.length;
    this.currentIndex = nextIndex;
    const nextImageUrl = this.imageUrls[nextIndex];
    callback(nextImageUrl);
  }
}
