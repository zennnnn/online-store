import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  @Output() event = new EventEmitter();

  getProducts() {
    return [
      {
        id: 1,
        name: "Planters' Choice Bonsai Starter Kit - The Complete Kit to Easily Grow 4 Bonsai Trees from Seed with Comprehensive Guide & Bamboo Plant Markers - Unique Gift Idea (Bonsai)",
        description:
          'EVERYTHING NEEDED TO GROW 4 BEAUTIFUL BONSAI TREES - IN ONE SLEEK BOX: Contains 4 types of organic seeds (Rocky Mountain Bristlecone Pine, Black Poui, Norway Spruce, and Flame Tree) stored in seed-safe vials for better germination, 4 biodegradable growing pots, 4 expanding-soil discs, 4 bamboo plant markers, 1 bonsai clipper and a beautiful, comprehensive and simple instruction booklet. ',
        pictureUrl:
          'https://secure.img1-fg.wfcdn.com/im/63380051/resize-h445%5Ecompr-r85/9521/95215979/Arbre+de+bonsai+r%C3%A9aliste+en+pot+harland+buis.jpg',
        altPicture: 'Bonsai tree in pottery',
        price: 172.99,
        quantity: 10,
        rate: 4.5,
      },
      {
        id: 2,
        name: 'product 2',
        description: 'product 2 description',
        pictureUrl:
          'https://secure.img1-fg.wfcdn.com/im/95803844/resize-h755-w755%5Ecompr-r85/2226/222679290/Arbre+%C3%A0+bonsai+pin+en+pot.jpg',
        altPicture: 'Bonsai tree in pottery again',
        price: 76.99,
        quantity: 10,
        rate: 4.5,
      },
    ];
  }
}
