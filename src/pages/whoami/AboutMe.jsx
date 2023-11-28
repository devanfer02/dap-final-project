export default function AboutMe() {
  return (
    <div className='container mb-5' style={{ marginTop: '30vh' }}>
      <div className='row justify-content-center'>
        <h1 className='text-center'>About Developer</h1>
        <p className='text-center'>
          Hello My Name is Devan Ferrel <br/>
          Im the Developer of this Website <br/>
          You can visit me at these social links
        </p>
        <ul class="nav text-center justify-content-center">
          <li class="nav-item">
            <a class="nav-link" href="https://www.linkedin.com/in/devanferrel/">Linkedin</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/devanfer02">Github</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.instagram.com/dvnf20/">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  )
}