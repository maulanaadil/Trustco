export const removeTextSection = (breakpoint) => {
  // Remove all text content except Understanding Section
  if (breakpoint > 0 && breakpoint < 1500) {
    document
      .getElementById('text-content-2')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-3')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-4')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-5')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-6')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-1')
      .classList.add('text-content-active')
  }
  // Remove all text content except Brainstroming Section
  else if (breakpoint > 1500 && breakpoint < 3600) {
    document
      .getElementById('text-content-1')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-3')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-4')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-5')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-6')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-2')
      .classList.add('text-content-active')
  }
  // Remove all text content except Wireframing Section
  else if (breakpoint > 3600 && breakpoint < 6000) {
    document
      .getElementById('text-content-1')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-2')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-4')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-5')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-6')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-3')
      .classList.add('text-content-active')
  }
  // Remove all text content except Designing Section
  else if (breakpoint > 6000 && breakpoint < 7300) {
    document
      .getElementById('text-content-1')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-2')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-3')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-5')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-6')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-4')
      .classList.add('text-content-active')
  }
  // Remove all text content except Developing Section
  else if (breakpoint > 7300 && breakpoint < 8300) {
    document
      .getElementById('text-content-1')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-2')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-3')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-4')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-6')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-5')
      .classList.add('text-content-active')
  }
}

export const changeTextHandler = (breakpoint) => {
  // Change to Text Brainstorming Section
  if (breakpoint > 1500 && breakpoint < 3600) {
    document
      .getElementById('text-content-1')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-2')
      .classList.add('text-content-active')
  }

  // Change to Text Wireframing Section
  if (breakpoint > 3600 && breakpoint < 6000) {
    document
      .getElementById('text-content-2')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-3')
      .classList.add('text-content-active')
  }

  // Change to Text Designing Section
  if (breakpoint > 6000 && breakpoint < 7300) {
    document
      .getElementById('text-content-3')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-4')
      .classList.add('text-content-active')
  }

  // Change to Text Designing Section
  if (breakpoint > 7300 && breakpoint < 8300) {
    document
      .getElementById('text-content-4')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-5')
      .classList.add('text-content-active')
  }

  // Change to Text Deploy & Testing Section
  if (breakpoint > 8300 && breakpoint < 9572) {
    document
      .getElementById('text-content-5')
      .classList.remove('text-content-active')

    document
      .getElementById('text-content-6')
      .classList.add('text-content-active')
  }
}

export const containerDisplayOnChange = (breakpoint) => {
  if (breakpoint > 1200) {
    document.getElementById('how-we-work').style.position = 'fixed'
    document.getElementById('how-we-work').style.top = '0'
  } else if (breakpoint < 1200) {
    document.getElementById('how-we-work').style.position = 'static'
  }
  if (breakpoint > 9500) {
    document.getElementById('how-we-work').style.position = 'sticky'
    document.getElementById('how-we-work').style.bottom = '0'
  }

  if (window.innerWidth < 400) {
    if (breakpoint > 1400) {
      document.getElementById('how-we-work').style.position = 'fixed'
      document.getElementById('how-we-work').style.top = '0'
    } else if (breakpoint < 1400) {
      document.getElementById('how-we-work').style.position = 'static'
    }
    if (breakpoint > 9500) {
      document.getElementById('how-we-work').style.position = 'sticky'
      document.getElementById('how-we-work').style.bottom = '0'
    }
  }
}
