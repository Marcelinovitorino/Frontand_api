// Carregar vídeos automaticamente ao iniciar
document.addEventListener('DOMContentLoaded', function() {
    carregarVideos();
  });
  
  // Função para carregar vídeos
  function carregarVideos() {
    const lista = document.getElementById('videos-lista');
    lista.innerHTML = '<li>Carregando vídeos...</li>';
  
    fetch('https://crud-nodejs-neon.onrender.com/videos')
      .then(response => response.json())
      .then(data => {
        lista.innerHTML = ''; // Limpa a lista
  
        if (data.length === 0) {
          lista.innerHTML = '<li>Nenhum vídeo encontrado.</li>';
        } else {
          data.forEach(video => {
            const li = document.createElement('li');
            li.innerHTML = `
              <strong>${video.title}</strong><br>
              <em>${video.description}</em><br>
              <span>Duração: ${video.duration} minutos</span><br>
              <button class="editar" data-id="${video.id}">Editar</button>
              <button class="excluir" data-id="${video.id}">Excluir</button>
            `;
            lista.appendChild(li);
          });
  
          // Adicionar eventos de edição e exclusão
          adicionarEventosDeEdicaoEExclusao(data);
        }
      })
      .catch(error => console.error('Erro ao carregar vídeos:', error));
  }
  
  // Função para adicionar eventos de edição e exclusão
  function adicionarEventosDeEdicaoEExclusao(data) {
    document.querySelectorAll('.editar').forEach(button => {
      button.addEventListener('click', function() {
        const videoId = this.getAttribute('data-id');
        const video = data.find(v => v.id == videoId);
  
        // Preenche o formulário de atualização
        document.getElementById('titulo-atualizar').value = video.title;
        document.getElementById('descricao-atualizar').value = video.description;
        document.getElementById('duracao-atualizar').value = video.duration;
  
        // Exibe o formulário de atualização
        document.getElementById('formulario-atualizar').style.display = 'block';
        document.getElementById('atualizar').setAttribute('data-id', videoId);
      });
    });
  
    document.querySelectorAll('.excluir').forEach(button => {
      button.addEventListener('click', function() {
        const videoId = this.getAttribute('data-id');
        if (confirm('Tem certeza que deseja excluir este vídeo?')) {
          fetch(`https://crud-nodejs-neon.onrender.com/videos/${videoId}`, {
            method: 'DELETE'
          })
          .then(response => response.json())
          .then(() => {
            alert('Vídeo excluído com sucesso!');
            carregarVideos(); // Recarrega a lista de vídeos
          })
          .catch(error => console.error('Erro ao excluir vídeo:', error));
        }
      });
    });
  }
  
  // Criar vídeo
  document.getElementById('criar').addEventListener('click', function() {
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const duracao = document.getElementById('duracao').value;
  
    const novoVideo = { title: titulo, description: descricao, duration: duracao };
  
    fetch('https://crud-nodejs-neon.onrender.com/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoVideo)
    })
      .then(response => response.json())
      .then(() => {
        alert('Vídeo criado com sucesso!');
        carregarVideos(); // Recarrega a lista
        document.getElementById('titulo').value = '';
        document.getElementById('descricao').value = '';
        document.getElementById('duracao').value = '';
      })
      .catch(error => console.error('Erro ao criar vídeo:', error));
  });
  
  // Atualizar vídeo
  document.getElementById('atualizar').addEventListener('click', function() {
    const videoId = this.getAttribute('data-id');
    const titulo = document.getElementById('titulo-atualizar').value;
    const descricao = document.getElementById('descricao-atualizar').value;
    const duracao = document.getElementById('duracao-atualizar').value;
  
    const videoAtualizado = { title: titulo, description: descricao, duration: duracao };
  
    fetch(`https://crud-nodejs-neon.onrender.com/videos/${videoId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(videoAtualizado)
    })
      .then(response => response.json())
      .then(() => {
        alert('Vídeo atualizado com sucesso!');
        carregarVideos(); // Recarrega a lista
        document.getElementById('formulario-atualizar').style.display = 'none'; // Esconde o formulário
      })
      .catch(error => console.error('Erro ao atualizar vídeo:', error));
  });
  