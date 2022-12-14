export interface BaseEntry {
  type: string
  name: string
  date: string
  link?: string
  linkText?: string
  award?: string
  contribution?: string
  overall?: number
  series?: string
  seriesNo?: string
  publishedAt?: string
  purpose?: string
  gpa?: string
  position?: string
  specificDate?: string
  publication?: string
  description?: string
  subtype?: string
  id?: string
  acolades?: string
  scores?: Record<string, number>
  ended?: string
  location?: string
}

export type Entry = BaseEntry

import articles from './entries.articles'
import awards from './entries.awards'
import books from './entries.books'
import education from './entries.education'
import employment from './entries.employment'
import events from './entries.events'
import hacks from './entries.hacks'
import news from './entries.news'
import patents from './entries.patents'
import projects from './entries.projects'
import publications from './entries.publications'
import videos from './entries.videos'

export const entries: Entry[] = [
  ...articles,
  ...awards,
  ...books,
  ...education,
  ...employment,
  ...events,
  ...hacks,
  ...news,
  ...patents,
  ...projects,
  ...publications,
  ...videos
]
