function dropDownMenu(){
    const button = document.getElementById('menu');
const dropDownContent = document.querySelector('.dropDownContent');

const applyStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
        .hidden {
            display: none;
        }
        .visible {
            display: block;
            list-style-type: none;
            position: absolute;
            background-color: rgba(255, 255, 255, 0.8);
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
            padding: 12px 16px;
            z-index: 1;
            margin: 5px 0;
            cursor: pointer;
            backdrop-filter: blur(10px);
            padding: 12px 16px;
            border-radius: 8px;
        }
        .visible li:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
        #menu {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            border-radius: 8px;
        }
        #menu:hover {
            background-color: #45a049;
        }
    `;
    document.head.appendChild(style);
};

applyStyles();

button.addEventListener('click', function(){
    if(dropDownContent.classList.contains('hidden')){

        dropDownContent.classList.remove('hidden');
        dropDownContent.classList.add('visible');
    }

    else{
        dropDownContent.classList.remove('visible');
        dropDownContent.classList.add('hidden');
    }
    
});
}

export { dropDownMenu };