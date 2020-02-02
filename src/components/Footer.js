import React from 'react'
// import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://twitter.com/chbtherapy/">@chbtherapy</a>
    </h2>
    <br />
    {/* <InstagramFeed count="8" /> */}
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © {new Date().getFullYear()} CHB Therapy. All rights reserved. Design by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span>
      </div>
    </footer>
  </div>
)
