const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    for (let corte of barbearia.cortes) {
        
        if (corte.id === id) {
            
            return corte;
        }
    }
    
    return 'Corte não encontrado'
}

function buscaBarbaPorId(id) {
    for (let barba of barbearia.barbas) {
        
        if (barba.id === id) {
            
            return barba;
        }
    }
    
    return 'Barba não encontrada'

}

function verificaStatusBarbearia() {
    
if (barbearia.estaAberto == true) {
    return 'Estamos abertos'

}
return 'Estamos fechados'

    
}

function retornaTodosCortes() {
    

let listaDeCortes = [];


for (let i = 0; i < barbearia.cortes.length; i++) {

    listaDeCortes.push(barbearia.cortes[i]);
}


return listaDeCortes;
    
}


function retornaTodasBarbas() {

    let listaDeBarbas = [];


for (let i = 0; i < barbearia.barbas.length; i++) {

    listaDeBarbas.push(barbearia.barbas[i]);
}


return listaDeBarbas;

}

function criaPedido(nome, idCorte, idBarba) {
    const corte = buscaCortePorId(idCorte);
    const barba = buscaBarbaPorId(idBarba);

    const pedido = {
        nome: nome,
        pedidoCorte: corte.tipo,
        pedidoCortePreco: corte.valor,
        pedidoBarba: barba.tipo,
        pedidoBarbaPreco: barba.valor,
    };
    
    return pedido;
}


function atualizarServico(lista, id, valor, tipo) {
    
   
   for (let i = 0; i < lista.length; i++) {
    
    if (lista[i].id === id) {
        
        lista[i].tipo = tipo;
        lista[i].valor = valor;
       // break; 
    }
}

return lista;
}

function calculaTotal(pedido) {
    
    const total = pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
    
    return total;
}
  
  
