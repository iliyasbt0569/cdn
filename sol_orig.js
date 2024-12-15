    const imgPaths = [
        "https://iliyasbt0569.github.io/cdn/card1.png",
        "https://iliyasbt0569.github.io/cdn/card2.png",
        "https://iliyasbt0569.github.io/cdn/card3.png",
        "https://iliyasbt0569.github.io/cdn/card4.png",
        "https://iliyasbt0569.github.io/cdn/card5.png",
        "https://iliyasbt0569.github.io/cdn/card6.png",
        "https://iliyasbt0569.github.io/cdn/card7.png",
        "https://iliyasbt0569.github.io/cdn/card8.png",
        "https://iliyasbt0569.github.io/cdn/card9.png",
        "https://iliyasbt0569.github.io/cdn/card10.png",
        "https://iliyasbt0569.github.io/cdn/card11.png",
        "https://iliyasbt0569.github.io/cdn/card12.png",
        "https://iliyasbt0569.github.io/cdn/card13.png",
        "https://iliyasbt0569.github.io/cdn/card14.png",
        "https://iliyasbt0569.github.io/cdn/card15.png",
        "https://iliyasbt0569.github.io/cdn/card16.png",
        "https://iliyasbt0569.github.io/cdn/card17.png",
        "https://iliyasbt0569.github.io/cdn/card18.png",
        "https://iliyasbt0569.github.io/cdn/card19.png",
        "https://iliyasbt0569.github.io/cdn/card20.png",
        "https://iliyasbt0569.github.io/cdn/card21.png",
        "https://iliyasbt0569.github.io/cdn/card22.png",
        "https://iliyasbt0569.github.io/cdn/card23.png",
        "https://iliyasbt0569.github.io/cdn/card24.png",
        "https://iliyasbt0569.github.io/cdn/card25.png",
        "https://iliyasbt0569.github.io/cdn/card26.png",
        "https://iliyasbt0569.github.io/cdn/card27.png",
        "https://iliyasbt0569.github.io/cdn/card28.png",
        "https://iliyasbt0569.github.io/cdn/card29.png",
        "https://iliyasbt0569.github.io/cdn/card30.png",
        "https://iliyasbt0569.github.io/cdn/card31.png",
    ];

    let currentImageIndex = 0;
    let imageElement = null;

    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute("style", "margin-left: 75px; margin-bottom: 36px");
    buttonContainer.id = 'buttonContainer';
    document.body.appendChild(buttonContainer);

    let buttonsStyle = "border:none; color: rgb(105, 122, 141); background: transparent;opacity: 0.5;";

    const addImageBtn = document.createElement('button');
    addImageBtn.setAttribute("style", buttonsStyle);
    addImageBtn.id = 'addImageBtn';
    addImageBtn.classList.add('btn');
    addImageBtn.textContent = '+';
    buttonContainer.appendChild(addImageBtn);

    const prevBtn = document.createElement('button');
    prevBtn.setAttribute("style", buttonsStyle);
    prevBtn.id = 'prevBtn';
    prevBtn.classList.add('btn');
    prevBtn.textContent = '<';
    buttonContainer.appendChild(prevBtn);

    const nextBtn = document.createElement('button');
    nextBtn.setAttribute("style", buttonsStyle);
    nextBtn.id = 'nextBtn';
    nextBtn.classList.add('btn');
    nextBtn.textContent = '>';
    buttonContainer.appendChild(nextBtn);

    addImageBtn.addEventListener('click', () => {
        if (imageElement) {
            imageElement.remove();
            imageElement = null;
        } else {
            imageElement = document.createElement('img');
            imageElement.setAttribute("style", "margin-left: 75px;margin-bottom: 36px;opacity: 0.07;")
            imageElement.src = imgPaths[currentImageIndex];
            document.body.appendChild(imageElement);
        }
    });

    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + imgPaths.length) % imgPaths.length;  // Бесконечный переход назад
        if (imageElement) {
            imageElement.src = imgPaths[currentImageIndex];
        }
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % imgPaths.length;  // Бесконечный переход вперед
        if (imageElement) {
            imageElement.src = imgPaths[currentImageIndex];
        }
    });
