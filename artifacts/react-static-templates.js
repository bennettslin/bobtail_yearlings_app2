

import React from 'react'
import universal, { setHasBabelPlugin } from '/Users/bennettslin/Projects/bobtail_yearlings_app2/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/Users/bennettslin/Projects/bobtail_yearlings_app2/src/pages/404.js'), universalOptions)
      t_0.template = '/Users/bennettslin/Projects/bobtail_yearlings_app2/src/pages/404.js'
      
const t_1 = universal(import('/Users/bennettslin/Projects/bobtail_yearlings_app2/src/pages/about.js'), universalOptions)
      t_1.template = '/Users/bennettslin/Projects/bobtail_yearlings_app2/src/pages/about.js'
      
const t_2 = universal(import('/Users/bennettslin/Projects/bobtail_yearlings_app2/src/pages/blog.js'), universalOptions)
      t_2.template = '/Users/bennettslin/Projects/bobtail_yearlings_app2/src/pages/blog.js'
      
const t_3 = universal(import('/Users/bennettslin/Projects/bobtail_yearlings_app2/src/pages/index.js'), universalOptions)
      t_3.template = '/Users/bennettslin/Projects/bobtail_yearlings_app2/src/pages/index.js'
      
const t_4 = universal(import('/Users/bennettslin/Projects/bobtail_yearlings_app2/src/containers/Post'), universalOptions)
      t_4.template = '/Users/bennettslin/Projects/bobtail_yearlings_app2/src/containers/Post'
      

// Template Map
export default {
  '/Users/bennettslin/Projects/bobtail_yearlings_app2/src/pages/404.js': t_0,
'/Users/bennettslin/Projects/bobtail_yearlings_app2/src/pages/about.js': t_1,
'/Users/bennettslin/Projects/bobtail_yearlings_app2/src/pages/blog.js': t_2,
'/Users/bennettslin/Projects/bobtail_yearlings_app2/src/pages/index.js': t_3,
'/Users/bennettslin/Projects/bobtail_yearlings_app2/src/containers/Post': t_4
}
// Not Found Template
export const notFoundTemplate = "/Users/bennettslin/Projects/bobtail_yearlings_app2/src/pages/404.js"

