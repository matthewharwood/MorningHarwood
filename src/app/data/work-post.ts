export interface WorkPost {
  id: number,
  title: string,
  categories: Array<string>,
  paragraph: string,
  slug: string
}


export interface WorkPosts {
  data: Array<WorkPost>
}

export const POST_TABLE:WorkPosts = {
  data: [
    {
      id: 1,
      title: 'Stanley',
      categories: ['Web Application'],
      paragraph: 'Worked collaboratively with an Art Director, Visual Designer & another Creative Developer to create a tool that unifies what was otherwise a fragmented process on Nike Jordan.',
      slug: 'stanley'
    }, {
      id: 2,
      title: 'Target Weekly Ad',
      categories: ['Web Application'],
      paragraph: '',
      slug: 'target-weekly-ad'
    }, {
      id: 3,
      title: 'Google Pathfinder',
      categories: ['Web Application'],
      paragraph: '',
      slug: 'google-pathfinder'
    }, {
      id: 4,
      title: 'Like +',
      categories: ['Web Application'],
      paragraph: '',
      slug: 'target-weekly-ad'
    }, {
      id: 4,
      title: 'Like +',
      categories: ['Web Application'],
      paragraph: '',
      slug: 'target-weekly-ad'
    }
  ]
};