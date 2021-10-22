import { AfterViewInit, Component } from '@angular/core';
import { entries } from 'src/entries';
import { dateSort } from 'src/sorts';
import contacts from '../contact'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'endless-frontier';
  entries = entries.sort(dateSort);
  filter = entries;
  categories = (() => {
    const categorySet = new Set<string>()
    entries.forEach(e => categorySet.add(e.type))
    return [...categorySet].sort()
  })()
  contacts = contacts
  showTimeline = true

  get count() {
    return this.filter.length
  }

  hideBlocks(blocks: NodeListOf<HTMLElement>, offset: number) {
    blocks.forEach(block => {
      console.log(block.offsetTop, window.scrollY + window.innerHeight * offset)
      if (block.offsetTop > window.scrollY + window.innerHeight * offset) {
        block.classList.add('is-hidden')
      }
    })
  }

  showBlocks(blocks: NodeListOf<HTMLElement>, offset: number) {
    blocks.forEach(block => {
      if (block.offsetTop <= window.scrollY + window.innerHeight * offset) {
        if (block.classList.contains('is-hidden')) {
          block.classList.remove('is-hidden')
          block.classList.add('bounce-in')
        }
      }
    })
  }

  ngAfterViewInit() {
    const timelineBlocks = document.querySelectorAll('timeline-block') as NodeListOf<HTMLElement>
    const offset = 0.8;
  
    // Hide timeline blocks which are outside the viewport
    this.hideBlocks(timelineBlocks, offset);

    // On scolling, show/animate timeline blocks when enter the viewport
    window.addEventListener('scroll', () => {
      window.requestAnimationFrame(() => {
        this.showBlocks(document.querySelectorAll('timeline-block'), offset)
      })
    })
    // $('#contact-me').css('display', 'block');
  }

  populate(categoryName?: string) {
    this.showTimeline = true
    this.filter = this.entries
      .filter(e => categoryName === undefined || e.type === categoryName)
    setTimeout(() => {
      this.hideBlocks(document.querySelectorAll('timeline-block'), 0.8)
      this.showBlocks(document.querySelectorAll('timeline-block'), 0.8)
    }, 10)
  }

  contact() {
    this.showTimeline = false
  }
}
