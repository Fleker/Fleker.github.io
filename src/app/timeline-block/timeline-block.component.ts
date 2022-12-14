import { Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { entries, Entry } from 'src/entries';
import iconMap from '../icon-map'

@Component({
  selector: 'timeline-block',
  templateUrl: './timeline-block.component.html',
  styleUrls: ['./timeline-block.component.css']
})
export class TimelineBlockComponent implements OnChanges {
  @Input('entry') entry?: Entry
  @Input('index') index?: number
  @HostBinding('class.odd') isOdd: boolean = false
  constructor() { }

  get icon() {
    return iconMap[this.entry!.type] || 'assets/checkbox-blank-circle.svg'
  }

  get header2() {
    return {
        'Employment': `Started job at ${this.entry!.name}`,
        'Events': `${this.entry!.contribution || 'Hosted'} ${this.entry!.name}`,
        'OKR': `Overall ${this.entry!.overall}`,
    }[this.entry!.type] || this.entry!.name
  }

  get header3() {
    return {
      'Awards': `Won ${this.entry!.award}`,
      'Books': this.entry!.series ? `${this.entry!.series} #${this.entry!.seriesNo}` : '',
      'Education': this.entry!.gpa ? `${this.entry!.gpa} GPA` : '',
      'Employment': this.entry!.position || '',
      'Events': this.entry!.specificDate,
      'Hacks': this.entry!.purpose ? `Built at ${this.entry!.purpose}`: '',
      'News': this.entry!.publication,
      // 'OKR': Object.entries(this.entry!.scores!).map(([label, score]) => {
      //   `<h3>${label}: ${score}</h3>`
      // }).join(),
      'Patents': this.entry!.subtype,
      'Projects': this.entry!.description,
      'Standards': this.entry!.id,
      'Publications': this.entry!.publishedAt,
    }[this.entry!.type] || ''
  }

  get header4() {
    return {
      'Employment': `${this.entry!.date} - ${this.entry!.ended}`,
      'Events': this.entry!.location || '',
      'Hacks': this.entry!.acolades || '',
    }[this.entry!.type] || ''
  }

  get displayDate() {
    return this.formatDate(this.entry!.date)
  }

  get showDate() {
    // Kinda complicated
    if (this.index === 0) return true
    return this.formatDate(this.entry!.date) !== this.formatDate(entries[this.index! - 1].date)
  }

  formatDate(dateStr: string) {
    const date = new Date(dateStr)
    if (date == undefined) {
      return '';
    }
    var m = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    return `${m[date.getMonth()]} ${date.getFullYear()}`;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isOdd = this.index! % 2 === 1
  }
}
