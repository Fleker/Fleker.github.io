import { Component, OnInit } from '@angular/core';

const urlMap: Record<string, string> = {
  '/book-club': 'https:/google.com',
  '/blog': 'https://fleker.medium.com',
  '/books': 'https://felker.page',
}

@Component({
  selector: 'app-urlmapper',
  templateUrl: './urlmapper.component.html',
  styleUrls: ['./urlmapper.component.css']
})
export class UrlmapperComponent implements OnInit {
  url?: string

  constructor() { }

  ngOnInit(): void {
    const path = window.location.pathname
    if (!path) return
    this.url = urlMap[path]
    console.log('Path is', path, 'redirecting to', this.url!)
    setTimeout(() => {
      // window.location.href = this.url!
    }, 3000)
  }
}
