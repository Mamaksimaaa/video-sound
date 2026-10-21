const video = document.getElementById('video');
const audio = document.getElementById('audio');
const soundToggle = document.getElementById('soundToggle');

const enableAudio = async () => {
  try {
    await audio.play();
    video.muted = false;
    soundToggle.textContent = 'Звук включён';
    soundToggle.classList.add('hidden');
  } catch (error) {
    console.warn('Автовоспроизведение заблокировано:', error);
    soundToggle.textContent = 'Нажмите, чтобы включить звук';
    soundToggle.classList.remove('hidden');
  }
};

video.addEventListener('canplay', () => {
  video.play().catch(() => {});
});

soundToggle.addEventListener('click', async () => {
  await enableAudio();
});

document.addEventListener('pointerdown', () => {
  if (audio.paused) {
    enableAudio();
  }
}, { once: true });

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.key === 'Enter') {
    event.preventDefault();
    if (audio.paused) {
      enableAudio();
    }
  }
}, { once: true });

window.addEventListener('load', () => {
  if (video) {
    video.play().catch(() => {});
  }
});
