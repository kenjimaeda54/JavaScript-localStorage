
    let nome = '';
    if(typeof localStorage.nome == 'undefined'){          
    localStorage.nome = prompt("Digite um nome");    
    }
    nome = localStorage.nome;
    let area = document.getElementById('area')
     area.innerHTML = nome;  


