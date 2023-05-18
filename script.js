const armazenamento = [
    {icone: 'A', titulo:'Imagem', midias:1},
    {icone: 'B', titulo:'Vídeo', midias:1},
    {icone: 'C', titulo:'Youtube', midias:3},
    {icone: 'D', titulo:'Catálogo', midias:1},
    {icone: 'F', titulo:'Site', midias:5},
    {icone: 'G', titulo:'Stream', midias:1},
];

const dispositivos = [
    {titulo:'disp1', sincronizacao:'7 meses', idDispositivo:'10.0.22000', porcentagem:26},
    {titulo:'android', sincronizacao:'5 meses', idDispositivo:'10.0.22123', porcentagem:39},
    {titulo:'note', sincronizacao:'1 mês', idDispositivo:'10.0.22560', porcentagem:20},
    {titulo:'apple', sincronizacao:'10 horas', idDispositivo:'10.2.23700', porcentagem:12.4},
    {titulo:'nokia', sincronizacao:'5 horas', idDispositivo:'10.0.29900', porcentagem:22.6},
    {titulo:'batata', sincronizacao:'1 minuto', idDispositivo:'10.0.22444', porcentagem:21},
];

const playlists = [
    {titulo:'Nirvana', midias:1},
    {titulo:'Guns', midias:12},
    {titulo:'Joji', midias:3},
    {titulo:'Lund', midias:8},
]



const divArmazenamento = document.getElementById('armazenamento');

const popupContainer = document.querySelector('.popup-container');


function renderizaArmazenamento(itens){
    divArmazenamento.innerHTML = ''

    const divTitulo = document.createElement('div');
    divTitulo.classList.add('div-titulo-armazenamt');
    
    const tituloArmazenamento = document.createElement('h2');
    tituloArmazenamento.textContent = 'Armazenamento'
    
    const divItens = document.createElement('div');
    divItens.classList.add('div-itens-armazenamt');
    
    itens.forEach(item => {
        
        // CRIA ELEMENTOS HTML PARA CADA DADO
        const divItem = document.createElement('div');
        divItem.classList.add('div-item-armazenamt');
        
        const divIcon = document.createElement('div');
        divIcon.classList.add('div-icon-armazenamt');
        

        // icone
        const icon = document.createElement('h3');
        icon.textContent = item.icone;
        
        const divInfos = document.createElement('div');
        divInfos.classList.add('div-infos-armazenamt');

        // titulo
        const tituloItem = document.createElement('h4');
        tituloItem.textContent = item.titulo;

        const midiaItem = document.createElement('p');
        midiaItem.textContent = `${item.midias} mídias`;


        // COLOCA ELEMENTOS CRIADOS NO HTML
        divInfos.append(tituloItem, midiaItem)
        divIcon.append(icon);
        divItem.append(divIcon, divInfos);
        divItens.append(divItem);
        divTitulo.appendChild(tituloArmazenamento);
        divArmazenamento.append(divTitulo, divItens);
    });
}
renderizaArmazenamento(armazenamento);

const divDispositivos = document.getElementById('dispositivos');

function renderizaDispositivos(arrDispositivos){

    divDispositivos.innerHTML = ''
    
    const divTitulo = document.createElement('div');
    divTitulo.classList.add('div-titulo-dispositivos');
    
    const tituloDispositivos = document.createElement('h2');
    tituloDispositivos.textContent = 'Dispositivos'
    
    const divItens = document.createElement('div');
    divItens.classList.add('div-itens-dispositivos');
    
    const inputPesquisa = document.createElement('input');
    inputPesquisa.setAttribute('onchange', 'filtrarDisp()');
    inputPesquisa.classList.add('input-pesquisa-disp');


    arrDispositivos.forEach(disp =>{
        // CRIA ELEMENTOS HTML PARA CADA DADO
        const divItem = document.createElement('div');
        divItem.classList.add('item-dispositivo');

        // titulo
        const divInfosTitulo = document.createElement('div');
        divInfosTitulo.classList.add('infos-titulo-dispositivo');

        const divInfos = document.createElement('div');
        divInfos.classList.add('infos-dispositivo');

        const tituloItem = document.createElement('h4');
        tituloItem.textContent = disp.titulo;


        // sincronizacao
        const sincronizacaoItem = document.createElement('p');
        sincronizacaoItem.textContent = `Sincronizado há ${disp.sincronizacao}`;

        // id
        const idDispositivo = document.createElement('p');
        idDispositivo.textContent = disp.idDispositivo;

        //porcentagem
        const porcentagem = document.createElement('p');
        porcentagem.textContent = `(C) ${disp.porcentagem}%`


        // COLOCA ELEMENTOS CRIADOS NO HTML
        divInfos.append(idDispositivo, porcentagem);
        divInfosTitulo.append(tituloItem, sincronizacaoItem);
        divItem.append(divInfosTitulo, divInfos);
        divItens.appendChild(divItem);
        divTitulo.append(tituloDispositivos, inputPesquisa);
        divDispositivos.append(divTitulo, divItens);
    })
    
}
renderizaDispositivos(dispositivos)

const divPlaylists = document.getElementById('playlists');

function renderizaPlaylists(itens){
    // REMOVE ELEMENTOS HTML ANTERIORES DA TELA
    divPlaylists.innerHTML = ''
    
    // CRIA ELEMENTOS PARA DIVS E INFORMAÇÕES
    const divTitulo = document.createElement('div');
    divTitulo.classList.add('div-titulo-playlists');
    
    const tituloPlaylists = document.createElement('h2');
    tituloPlaylists.textContent = 'Playlists'
    
    const divItens = document.createElement('div');
    divItens.classList.add('div-itens-playlists');
    
    const inputPesquisa = document.createElement('input');
    inputPesquisa.setAttribute('onchange', 'filtrarPlaylists()');
    inputPesquisa.classList.add('input-pesquisa-playlists');

    const botaoAdd = document.createElement('button');
    botaoAdd.textContent = '+';
    botaoAdd.setAttribute('onclick', 'adicionaPlaylist()');
    botaoAdd.classList.add('botao-add-playlist');

    itens.forEach(item =>{

        // CRIA ELEMENTOS PARA CADA INFORMAÇÃO DO ARRAY
        const divItem = document.createElement('div');
        divItem.classList.add('item-playlist');

        // titulo
        const tituloPlaylist = document.createElement('h4');
        tituloPlaylist.textContent = item.titulo;

        //midias
        const midiasPlaylist = document.createElement('p');
        midiasPlaylist.textContent = `Mídias: ${item.midias}`

        // ADICIONA ELEMENTOS NO HTML
        divItem.append(tituloPlaylist, midiasPlaylist);
        divItens.append(divItem);
        divTitulo.append(tituloPlaylists, inputPesquisa, botaoAdd);
        divPlaylists.append(divTitulo, divItens);
        
    })

}

renderizaPlaylists(playlists);


function filtrarDisp(){

    //BUSCA VALOR PESQUISA
    const inputValue = document.querySelector('.input-pesquisa-disp').value;
     
    //SE INPUT VAZIO, RENDERIZA TODOS DISPOSITIVOS
    if((inputValue == '')||(inputValue == ' ')){
        renderizaDispositivos(dispositivos);
    } else {

        //SE TIVER VALOR, FILTRA E RETORNA APENAS DISPOSITIVOS FILTRADOS
        const dispFiltrados = dispositivos.filter(disp =>{
            
            //TRANSFORMA VALORES INPUT PARA LOWER CASE
            const inputLower = inputValue.toLowerCase();
            const dispLower = disp.titulo.toLowerCase();
            console.log(inputLower)

            if((dispLower.includes(inputLower)) || (inputLower.length === 0)) return true;

        });
        renderizaDispositivos(dispFiltrados)
    }
}


function adicionaPlaylist(){

    popupContainer.style.display = 'flex';

}
    
function fecharPopup(){
    
    popupContainer.style.display = 'none';
}
    
    
    

function buscaDadosInput(){
    const inputNome = document.querySelector('#nome-playlist').value;
    let inputMidia = document.querySelector('#midia-playlist').value;
    console.log(inputNome);

    const novaPlaylist = [];

    novaPlaylist.titulo = inputNome;
    novaPlaylist.midias = inputMidia;

    if(((inputNome == '') || (inputNome == ' '))){
        renderizaPlaylists(playlists);
    } else {

        if((inputMidia == '')){
            inputMidia.value = 0;
            playlists.push(novaPlaylist);
            renderizaPlaylists(playlists);
        } else {
            playlists.push(novaPlaylist);
            renderizaPlaylists(playlists);
        }
    }
    popupContainer.style.display = 'none';


}