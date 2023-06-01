function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = parseInt(document.querySelector('.rating-circle.selected').dataset.value);
    const comment = document.getElementById('comment').value;
  
    if (name && email && rating && comment) {
      console.log('Submitted feedback:', { name, email, rating, comment });
  
      // Reset form fields
      document.getElementById('form').reset();
  
      // Display thank you message
      document.getElementById('form').style.display = 'none';
      document.getElementById('thank-you-message').style.display = 'block';
    } else {
      alert('Please fill in all the required fields.');
    }
  }
  
  function handleRatingChange(event) {
    const ratingCircles = document.getElementsByClassName('rating-circle');
  
    // Remove 'selected' class from all circles
    for (let i = 0; i < ratingCircles.length; i++) {
      ratingCircles[i].classList.remove('selected');
    }
  
    // Add 'selected' class to clicked circle and update rating value
    if (event.target.classList.contains('rating-circle')) {
      event.target.classList.add('selected');
    }
  }
  
  // Generate the rating circles dynamically
  const ratingContainer = document.getElementById('rating-container');
  for (let i = 1; i <= 5; i++) {
    const circle = document.createElement('div');
    circle.classList.add('rating-circle');
    circle.innerHTML = i;
    circle.setAttribute('data-value', i);
    ratingContainer.appendChild(circle);
  }
  