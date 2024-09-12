import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header className="flex justify-around bg-slate-500 p-3">
        <h1 className="text-white font-bold text-xl">SenaiNews</h1>
        <nav className="flex gap-5">
        <a  className="text-white text-xl" href="#">Home</a>
        <a  className="text-white text-xl" href="#">Sobre</a>
        <a  className="text-white text-xl" href="#">Contato</a>
        </nav>
      </header>
      <main className="mx-6 flex-1">
        <h2 className="mt-4">Principais noticias</h2>
        <div className="flex justify-around flex-wrap gap-4">
          <div className=" flex flex-col justify-center items-center rounded border-slate-500 border-2 w-96">
            <img className="w-full h-full" src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportSportsNews/tagreuters.com2024binary_LYNXMPEK680Q7-FILEDIMAGE-e1724421316174.jpg?w=1220&h=674&crop=1&quality=85" alt=""/>
            <h3 className="text-center text-xl font-semibold">Vini Jr. pede perdão à torcida e revela motivo do mau rendimento</h3>
            <a className="bg-slate-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
          <div className=" flex flex-col justify-center items-center rounded border-slate-500 border-2 w-96">
            <img className="w-full h-full" src="https://imagem.mixvale.com.br/cdn-cgi/imagedelivery/nH4rNJcg3zgkiRPCh6mAdA/www.mixvale.com.br/2024/09/BOLA-DE-OURO.jpg/w=1281" alt=""/>
            <h3 className="text-center text-xl font-semibold">Cristiano Ronaldo revela quem serão os próximos candidatos ao prêmio</h3>
            <a className="bg-slate-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
          <div className=" flex flex-col justify-center items-center rounded border-slate-500 border-2 w-96">
            <img className="w-full h-full" src="https://www.adrenaline.com.br/wp-content/uploads/2024/09/Epic-Games-Store-afirma-que-crossplay-e-obrigatorio-para-seus-jogos-multiplayer-912x569.jpg" alt=""/>
            <h3 className="text-center text-xl font-semibold">Epic Games Store afirma que crossplay é obrigatório para jogos multiplayer</h3>
            <a className="bg-slate-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
          <div className=" flex flex-col justify-center items-center rounded border-slate-500 border-2 w-96">
            <img className="w-full h-full" src="https://meups.com.br/wp-content/uploads/2024/09/16554ba2a0ada3fc7c2f05187300c4a3fb1966f1.jpg-900x503.webp" alt=""/>
            <h3 className="text-center text-xl font-semibold">PS5 Pro terá cerca de 50 games aprimorados no lançamento</h3>
            <a className="bg-slate-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
          <div className=" flex flex-col justify-center items-center rounded border-slate-500 border-2 w-96">
            <img className="w-full h-full" src="https://flowgames.gg/wp-content/uploads/2024/04/TGA-2023-Xbox-Game-Pass-1044x783.jpg" alt=""/>
            <h3 className="text-center text-xl font-semibold">Game Pass Standard pode não receber alguns jogos, mesmo após 1 ano</h3>
            <a className="bg-slate-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
          <div className=" flex flex-col justify-center items-center rounded border-slate-500 border-2 w-96">
            <img className="w-full h-full" src="https://www.adrenaline.com.br/wp-content/uploads/2024/09/recurso-familia-steam-912x569.jpg" alt=""/>
            <h3 className="text-center text-xl font-semibold">Novo recurso, Família Steam permite compartilhar jogos</h3>
            <a className="bg-slate-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
          <div className=" flex flex-col justify-center items-center rounded border-slate-500 border-2 w-96">
            <img className="w-full h-full" src="https://www.adrenaline.com.br/wp-content/uploads/2024/05/Test-Drive-Unlimited-Solar-Crown-Lancamento-setembro-912x569.webp" alt=""/>
            <h3 className="text-center text-xl font-semibold">GeForce RTX 4090 não roda o novo Test Drive Unlimited em 4K a 60 FPS constante</h3>
            <a className="bg-slate-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
          <div className=" flex flex-col justify-center items-center rounded border-slate-500 border-2 w-96">
            <img className="w-full h-full" src="https://www.adrenaline.com.br/wp-content/uploads/2024/09/dlc-elden-ring-estatisticas-912x569.jpg" alt=""/>
            <h3 className="text-center text-xl font-semibold">DLC de Elden Ring: jogadores morreram quase 290 mil vezes para esse inimigo</h3>
            <a className="bg-slate-500 p-2 w-full text-center " href="#">Ver Mais</a>
          </div>
        </div>
      </main>
      <footer className="bg-slate-500 p-6 text-white text-center">
        <h4>Todos os direitos reservados</h4>
      </footer>
    </div>
  );
}

export default App;
