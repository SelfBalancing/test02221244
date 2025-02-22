const eyes = document.querySelector('.eyes');

for (let i = 0; i < 20; i++) {
  const div = document.createElement('div');
  div.className = 'eye'
  eyes.appendChild(div);
}

const eyeBall = (event) => {
  const allEye = document.querySelectorAll('.eye');
  allEye.forEach((eye) => {
    const x = eye.getBoundingClientRect().left + eye.offsetWidth / 2;
    const y = eye.getBoundingClientRect().top + eye.offsetHeight / 2;
    const radian = Math.atan2(event.pageX - x, event.pageY - y);
    const rot = radian * (180 / Math.PI) * -1 + 270;
    eye.style.transform = `rotate(${rot}deg)`;
  })
}

document.querySelector('body').addEventListener('mousemove', eyeBall);