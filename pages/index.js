import ScrollAnimation from 'react-animate-on-scroll';
import Head from 'next/head'
export default () => 
<div>
<Head><link rel="stylesheet" href="/static/animate.min.css"></link></Head>
<div style={{height: 1000}}><div style={{height: 1000}}>Welcome to next.js!</div><ScrollAnimation animateIn="fadeIn" animateOut="flash" duration={10}>
  ohh
</ScrollAnimation><div style={{height: 1000}}></div></div>
</div>
