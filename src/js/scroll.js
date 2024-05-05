export const onScrollUp = () => {
  if (window.scrollY != 0) {
    setTimeout(function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }
}

export const onScrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  element && element.scrollIntoView({ behavior: 'smooth' }); 
}

export const onScrollDown = () => {    
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition < documentHeight) {
        setTimeout(function () {
            window.scrollBy({ top: documentHeight - scrollPosition, behavior: 'smooth' });
        }, 300);
    }
}





