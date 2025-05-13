// const playlists = [
//     { titulo: 'Playlist 1', artista: 'Ana Calara', data: '18-09-2025' },
//     { titulo: 'Playlist 2', artista: 'Ana Calara', data: '18-09-2025' },
//     { titulo: 'Playlist Pop', artista: 'Ana Calara', data: '18-09-2025' },
//     // Adicione quantas quiser
//   ];
  
//   function criarCards(lista) {
//     const container = document.getElementById('playlistContainer');
//     container.innerHTML = '';
//     lista.forEach(pl => {
//       const card = document.createElement('div');
//       card.className = 'card';
//       card.innerHTML = `
//         <strong>DESENVOLVIMENTO</strong><br/>
//         Desenvolvido por: ${pl.artista}<br/>
//         Data de Criação: ${pl.data}
//       `;
//       container.appendChild(card);
//     });
//   }
  
  document.getElementById('search').addEventListener('input', function () {
    const termo = this.value.toLowerCase();
    const filtrados = playlists.filter(pl =>
      pl.titulo.toLowerCase().includes(termo) || 
      pl.artista.toLowerCase().includes(termo)
    );
    criarCards(filtrados);
  });
  
  function abrirLogin() {
    window.location.href = "login.html";
  }

  function abrirHome() {
    window.location.href = "home.html";
  }
  
  function abrirCadastro() {
    window.location.href = "cadastro.html";
  }

  function abrirPlaylist() {
    window.location.href = "playlist.html";
  }

  function abrirAlbuns() {
    window.location.href = "albuns.html";
  }
  
//   window.onload = () => criarCards(playlists);
  