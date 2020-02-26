const Main = require('@architect/views/main.js')
const staticAssetsHelper = require('./static-assets-helper')

// Customize your site by changing the data below
exports.handler = async function Index () {
  let body = Main({
    /**
     * Basic bio
     */
    fullname: 'Slava Bezgachev', // ←  Start by adding your name!
    title: 'My personal site!',
    occupation: 'Dev & dev',
    location: 'Kokshetau, KZ',
    bio: 'Some bio description',

    /**
     * Contact / social
     * - Comment out any item below to remove it from your page
     */
    email: 'bezgachev@gmail.com',
    twitter: 'slavabez',
    instagram: 'bezgachev.slava',

    /**
     * Layout
     */
    photographer: 'Ivana Cajina',
    service: 'Unsplash',
    credit: 'https://unsplash.com/@von_co',
    image: staticAssetsHelper('background.jpg')
    // or link to an external image URL such as ↓
    // image: 'https://images.unsplash.com/photo-1506535772317-9fdb71c959c6'
  })

  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body
  }
}
