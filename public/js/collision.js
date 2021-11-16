function collision(b, p){

    p.top = p.y
    p.bottom = p.y + p.height
    p.left = p.x
    p.right = p.x + p.width
    
    b.top = b.y
    b.bottom = b.y + b.height
    b.left = b.x
    b.right = b.x + b.width

    return b.right > p.left && b.top < p.bottom && b.left < p.right && b.bottom > p.top
}



