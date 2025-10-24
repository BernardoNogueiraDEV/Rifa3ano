import React from 'react';
const FirstPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col"
     style={{
       background: `linear-gradient(180deg, #fcbaa1, #f8f7f1, #f8f7f1)`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat'
     }}
    >
      {/* Header */}
      <header className="flex items-center p-6 space-x-3">
        <span className="text-4xl font-[Comforter]">Terceirão Maria Anália</span>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-evenly px-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-9xl font-light mb-4 border-b border-black pb-2 max-w-max font-comforter">
            Ação entre amigos
          </h1>
          <a href='#rifa' className="text-center mt-6 w-40 py-2 px-4 border border-black rounded-full font-bold text-xs tracking-widest hover:bg-black hover:text-white transition-colors">
            SAIBA MAIS
          </a>
        </div>
      </main>

      {/* Footer author */}
      <footer className="p-6 flex justify-end space-x-4 text-xs font-bold tracking-widest">
        <div className="text-right font-comforter">
          <p>RIFAS DO TERCEIRÃO</p>
          <p></p>
          <div className="border-b border-black mt-1"></div>
        </div>
      </footer>
    </div>
  );
};

export default FirstPage;
