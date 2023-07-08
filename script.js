function Navbar() {
    return `
      <nav>
        <ul>
          <li onclick="handleClick('Home')">Home</li>
          <li onclick="handleClick('About')">About</li>
          <li onclick="handleClick('Contact')">Contact Us</li>
        </ul>
      </nav>
    `;
  }

  function handleClick(option) {
    console.log(option);
  }

  document.getElementById('navbar').innerHTML = Navbar();