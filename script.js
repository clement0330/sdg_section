function getRandomPosition(max) {
    return Math.floor(Math.random() * max) + 'px';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const circleContainer = document.getElementById('circle-container');
    const numCircles = 50; // Adjust the number of circles as needed
  
    for (let i = 0; i < numCircles; i++) {
      const circle = document.createElement('div');
      circle.classList.add('circle');
  
      const startPositionX = getRandomPosition(window.innerWidth);
      const startPositionY = getRandomPosition(window.innerHeight);
      const duration = Math.random() * 10 + 5; // Adjust the duration as needed
  
      circle.style.left = startPositionX;
      circle.style.top = startPositionY;
      circle.style.animationDuration = `${duration}s`;
  
      circleContainer.appendChild(circle);
    }
  });
  const circleContainer = document.getElementById('circle-container');

  circleContainer.addEventListener('click', () => {
    window.open('https://www.globalgoals.org/', '_blank');
  });
  function changeGoalDescription(newDescription) {
    const goalDescription = document.getElementById('goal-description');
    goalDescription.style.opacity = 0; // Fade out the current description
  
    setTimeout(() => {
      goalDescription.textContent = newDescription; // Change the text content
      goalDescription.style.opacity = 1; // Fade in the new description
    }, 500); // Adjust the duration as needed (in milliseconds)
  }
function changeGoalDescription(newDescription) {
  const goalDescription = document.getElementById('goal-description');
  goalDescription.style.opacity = 0; // Fade out the current description

  setTimeout(() => {
    goalDescription.textContent = newDescription; // Change the text content
    goalDescription.style.opacity = 1; // Fade in the new description
  }, 500); // Adjust the duration as needed (in milliseconds)
}
document.addEventListener('DOMContentLoaded', function() {
  var slidesContainer = document.querySelector('.slides');
  var slideIndex = 0;
  
  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slidesContainer.children.length;
    slidesContainer.style.transform = 'translateX(' + (slideIndex * -100) + '%)';
  }
  
  setInterval(showNextSlide, 3000); // Adjust the interval duration (in milliseconds) between slide transitions
});
