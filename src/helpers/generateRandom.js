const colorRandom = () =>{
    const numberColor = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
    switch (numberColor) {
        case 1: return 'red';
        case 2: return 'blue';
        case 3: return 'green';
        case 4: return 'orange';
        case 5: return 'purple';
        case 6: return 'pink';
        case 7: return 'golden';
    
        default:
            break;
    }
}

export default colorRandom;