const SLUGS = {
  project: {
    type: 'projects/project',
    slug: true,
  },
  projectPage: {
    type: 'projects',
    slug: false,
  },
  archivePage: {
    type: 'archive',
    slug: false,
  },
  contactPage: {
    type: 'contact',
    slug: false,
  },
  objectPage: {
    type: 'objects',
    slug: false,
  },
  objectItem: {
    type: 'objects/object',
    slug: true,
  },
  homepageLayout: {
    type: 'home',
    slug: true,
  },
  studioPage: {
    type: 'about',
    slug: true,
  },
  jobPage: {
    type: 'jobs/job',
    slug: true,
  },
}

export default SLUGS
