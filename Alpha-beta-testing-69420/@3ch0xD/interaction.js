const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Set canvas dimensions to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const tools = [];

// Define a Tool class to represent the floating tools
class Tool {
    constructor(x, y, size, color) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.velocity = {
        x: (Math.random() - 0.5) * 0.5, // Adjust the speed here (horizontal velocity)
        y: (Math.random() - 0.5) * 0.5, // Adjust the speed here (vertical velocity)
      };
      this.number = Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    }
  
    update() {
      // Update number position based on velocity
      this.x += this.velocity.x;
      this.y += this.velocity.y;
  
      // Wrap around the canvas edges
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y < 0) this.y = canvas.height;
      if (this.y > canvas.height) this.y = 0;
  
      // Apply some random motion to the velocity
      this.velocity.x += (Math.random() - 0.5) * 0.01; // Adjust the random motion here (horizontal)
      this.velocity.y += (Math.random() - 0.5) * 0.01; // Adjust the random motion here (vertical)
    }
  
    draw() {
      // Draw the number on the canvas
      context.font = `${this.size}px Arial`;
      context.fillStyle = this.color;
      context.fillText(this.number, this.x, this.y);
    }
  }
  
  // Generate random floating numbers
  function generateTools(numTools) {
    for (let i = 0; i < numTools; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 30 + 12; // Random size between 12 and 42
      const color = 'lime'; // Green color
      const tool = new Tool(x, y, size, color);
      tools.push(tool);
    }
  }
  
  // ...

// Render the floating tools on the canvas
function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  tools.forEach((tool) => {
    tool.update();
    tool.draw();
  });
  requestAnimationFrame(render);
}

// Initialize the scene
function initialize() {
  generateTools(20); // Adjust the number of tools as desired
  render();

  setTimeout(showPopup, 2000); // Show popup after 2 seconds
}

// Show the popup dialogue box
function showPopup() {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.textContent = 'Hello!';
  document.body.appendChild(popup);
}

// Start the animation and show the popup after the page has loaded
window.addEventListener('load', initialize);

// Show the popup dialogue box
function showPopup() {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="buttons">
      <a style="text-decoration:none; color:yellow; font-family:sans-serif;" href="https://www.instagram.com/your_instagram_username" target="_blank">Instagram</a>&nbsp;&nbsp;&nbsp;
      <a style="text-decoration:none; color:yellow; font-family:sans-serif;" href="https://github.com/your_github_username" target="_blank">GitHub</a>
    </div>
  `;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add('show');
  }, 100);
}

  
