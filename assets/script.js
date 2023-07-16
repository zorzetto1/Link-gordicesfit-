    function toggleMode () {
    const html =document.documentElement

    if (html.classList.contains ('light')){
        html.classList.remove('light')
    } else {
    html.classList.add('light')
    }

    }
    //html.classList.toggle('light') //uma hipotese mas não funcionou
    //mudança de imagem (pergar a tag image )

    //se tiver o light mode adicionar imagem light
    //    se tiver sem light mode, manter a imagem normal


                //substituir a imagem 


    //const img = document.querySelector("#profile img")
    //if (html.classList.contains ('light')){
                    
    //     img.setAttribute('src', '')
    //} else {
    //  img.setAttribute("src", './assets') //imagem padrão            
    // }