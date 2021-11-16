function collision(b, p){

    p.top = p.y
    p.bottom = p.y + p.height
    p.left = p.x
    p.right = p.x + p.width
    
    b.top = b.y - b.r
    b.bottom = b.y + b.r
    b.left = b.x - b.r
    b.right = b.x + b.r

    return b.right > p.left && b.top < p.bottom && b.left < p.right && b.bottom > p.top
}



