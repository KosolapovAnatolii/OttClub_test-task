'use strict';

const form = document.getElementById('connection-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

