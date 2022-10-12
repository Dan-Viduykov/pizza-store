type Sizes = '138x138' | '146x146' | '183x183' | '233x233' | '292x292' | '366x366' | '584x584' | '760x760';

export const changeSizeImg = (str: string, size: Sizes = '138x138') => {
    const reg = /_(.+).png/gm;
    return str.replace(reg, `_${size}.png`);
}


// https://cdn.dodostatic.net/static/Img/Products/06c75b36952747a694a169662cb3267b_138x138.png
// 138w,https://cdn.dodostatic.net/static/Img/Products/06c75b36952747a694a169662cb3267b_146x146.png
// 146w,https://cdn.dodostatic.net/static/Img/Products/06c75b36952747a694a169662cb3267b_183x183.png
// 183w,https://cdn.dodostatic.net/static/Img/Products/06c75b36952747a694a169662cb3267b_233x233.png
// 233w,https://cdn.dodostatic.net/static/Img/Products/06c75b36952747a694a169662cb3267b_292x292.png
// 292w,https://cdn.dodostatic.net/static/Img/Products/06c75b36952747a694a169662cb3267b_366x366.png
// 366w,https://cdn.dodostatic.net/static/Img/Products/06c75b36952747a694a169662cb3267b_584x584.png
// 584w,https://cdn.dodostatic.net/static/Img/Products/06c75b36952747a694a169662cb3267b_760x760.png
// 760w,https://cdn.dodostatic.net/static/Img/Products/06c75b36952747a694a169662cb3267b_1875x1875.png