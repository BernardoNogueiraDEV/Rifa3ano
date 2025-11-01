import React, { useState } from "react";
import { motion } from "framer-motion";

// ---------- Funções auxiliares ----------
function gerarRangesDoBloco(bloco: number) {
  const bases = [1, 2501, 5001, 7501];
  const diff = (bloco - 1) * 50;
  return bases.map((start) => {
    const s = start + diff;
    return { start: s, end: s + 49 };
  });
}

function formatarRanges(ranges: { start: number; end: number }[]) {
  return ranges.map((r) => `${r.start}–${r.end}`).join(", ");
}

// ---------- Dados ----------
const blocos = [
  { nome: "AGATHA FANCIELE MEDEIROS MAGALHÃES", whatsapp: "5531999107208" }, // 1
  { nome: "ANA ALICE MOREIRA VIANA", whatsapp: "5531996446055" }, // 2
  { nome: "— SEM DONO —", whatsapp: "" }, // 3
  { nome: "ANA LAURA DOS REIS MOREIRA", whatsapp: "5531972611018" }, // 4
  { nome: "ANA LAURA DOS REIS MOREIRA (2º BLOCO)", whatsapp: "5531972611018" }, // 5
  { nome: "BERNARDO ALVES NOGUEIRA", whatsapp: "5531995175307" }, // 6
  { nome: "BRENDA KAROLINY MOREIRA ALVES FONSECA", whatsapp: "5531998847229" }, // 7
  { nome: "CARLA EDUARDA NASCIMENTO FIGUEREDO", whatsapp: "5531972503674" }, // 8
  { nome: "CARLOS DANIEL FERREIRA GONÇALVES", whatsapp: "5531971952689" }, // 9
  { nome: "CRISTIANO GABRIEL VERÍSSIMO FERNANDES", whatsapp: "5531971226073" }, // 10
  { nome: "— SEM DONO —", whatsapp: "" }, // 11
  { nome: "DAVI FERREIRA MOREIRA", whatsapp: "5531995602211" }, // 12
  { nome: "ENZO ENRICK OLIVEIRA SILVA", whatsapp: "5531971592945" }, // 13
  { nome: "GABRIEL KAIROS CAXEDO PEREIRA PARDINHO", whatsapp: "5531996219396" }, // 14
  { nome: "GUILHERME AUGUSTO FRANÇA SAMPAIO", whatsapp: "5531971222081" }, // 15
  { nome: "GUILHERME OTÁVIO ALVES RIBEIRO", whatsapp: "5531971283787" }, // 16
  { nome: "HENDRICK PABLO DE SOUZA VIEIRA", whatsapp: "5531996943237" }, // 17
  { nome: "ISADORA EMANUELLY VIEIRA DA SILVA", whatsapp: "5531995034359" }, // 18
  { nome: "IURY TADEU ROCHA PAULISTA", whatsapp: "5531990651849" }, // 19
  { nome: "JOÃO CARLOS FERREIRA ROCHA", whatsapp: "5531995437042" }, // 20
  { nome: "JOÃO PEDRO BARBOSA OLIVEIRA", whatsapp: "5531986257210" }, // 21
  { nome: "LAURA FERNANDES DE PAULA VIEIRA", whatsapp: "5531971230706" }, // 22
  { nome: "LAYLAINE MAONIELE FREITAS AMORIM", whatsapp: "5531996309092" }, // 23
  { nome: "CARLA EDUARDA NASCIMENTO FIGUEREDO (2º BLOCO)", whatsapp: "5531972503674" }, // 24
  { nome: "MARIA FERNANDA VIANA OLIVEIRA", whatsapp: "5531997487210" }, // 25
  { nome: "MATHEUS FELIPE CAMPOS DE SOUZA", whatsapp: "5531999223673" }, // 26
  { nome: "OTÁVIO AUGUSTO ROCHA MENDONÇA", whatsapp: "5531997542488" }, // 27
  { nome: "PABLO AUGUSTO LAGE BATISTA", whatsapp: "5531972404178" }, // 28
  { nome: "PAOLA CRISTINA SENA SAMPAIO", whatsapp: "5531971326996" }, // 29
  { nome: "PEDRO CAMPOS FERREIRA", whatsapp: "5531972309024" }, // 30
  { nome: "RAPHAEL MICHELL FERNANDES PEREIRA", whatsapp: "5531998699638" }, // 31
  { nome: "SARAH LUIZA DE MOREIRA PEREIRA", whatsapp: "5531971939616" }, // 32
  { nome: "SOPHIE VIANA PIRES", whatsapp: "5531996479833" }, // 33
  { nome: "— SEM DONO —", whatsapp: "" }, // 34
  { nome: "SUZANA GOMES SOUSA SILVA", whatsapp: "5537999650172" }, // 35
  { nome: "— SEM DONO —", whatsapp: "" }, // 36
  { nome: "VERÔNICA CAMPOS DOS REIS", whatsapp: "5531972498503" }, // 37
  { nome: "VINNICIUS ALVES BARBOSA", whatsapp: "5531999556352" }, // 38
  { nome: "LAURA FERNANDES DE PAULA VIEIRA (2º BLOCO)", whatsapp: "5531971230706" }, // 39
  { nome: "RAPHAEL MICHELL FERNANDES PEREIRA (2º BLOCO)", whatsapp: "5531998699638" }, // 40
  { nome: "BERNARDO ALVES NOGUEIRA (2º BLOCO)", whatsapp: "5531995175307" }, // 41
  { nome: "IURY TADEU ROCHA PAULISTA (2º BLOCO)", whatsapp: "5531990651849" }, // 42
  { nome: "GUILHERME AUGUSTO FRANÇA SAMPAIO (2º BLOCO)", whatsapp: "5531971222081" }, // 43
  { nome: "CARLOS DANIEL FERREIRA GONÇALVES (2º BLOCO)", whatsapp: "5531971952689" }, // 44
  { nome: "GABRIEL KAIROS CAXEDO PEREIRA PARDINHO (2º BLOCO)", whatsapp: "5531996219396" }, // 45
];

const alunosComRifas = blocos.map((b, i) => {
  const bloco = i + 1;
  const ranges = gerarRangesDoBloco(bloco);
  return {
    bloco,
    nome: b.nome,
    whatsapp: b.whatsapp,
    ranges,
    rangesText: formatarRanges(ranges),
  };
});

// ---------- Componente principal ----------
export default function RifaApp() {
  const [numero, setNumero] = useState("");
  const [nomeComprador, setNomeComprador] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [busca, setBusca] = useState("");

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length === 0) return "";
    if (cleaned.length <= 2) return `(${cleaned}`;
    if (cleaned.length <= 7)
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
      7,
      11
    )}`;
  };

  function encontrarDono(numeroEscolhido: number) {
    return alunosComRifas.find((a) =>
      a.ranges.some(
        (r) => numeroEscolhido >= r.start && numeroEscolhido <= r.end
      )
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const num = parseInt(numero, 10);
    if (isNaN(num)) {
      alert("Digite um número válido!");
      return;
    }
    const dono = encontrarDono(num);
    if (!dono) {
      alert("Esse número não pertence a nenhum bloco cadastrado.");
      return;
    }
    if (!dono.whatsapp) {
      alert(`O bloco ${dono.bloco} (${dono.nome}) está sem dono.`);
      return;
    }

    const msg = `Olá, ${dono.nome}! 👋 Meu nome é ${nomeComprador}. Telefone: ${telefone} Endereço: ${endereco} Escolhi o número ${num} da rifa!`;
    const link = `https://api.whatsapp.com/send?phone=+${dono.whatsapp}&text=${encodeURIComponent(
      msg
    )}`;
    window.open(link, "_blank");
  }

  const filtrados = alunosComRifas.filter((a) =>
    a.nome.toLowerCase().includes(busca.toLowerCase())
  );

  // ---------- JSX ----------
  return (
    <div
      className="min-h-screen flex flex-col items-center py-10 px-4"
      style={{
        background: `linear-gradient(180deg, #f8f7f1, #fcbaa1, #f8f7f1)`,
      }}
    >
      {/* Título principal */}
      <motion.h1
        id="rifa"
        className="text-3xl md:text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🎟️ Ação Entre Amigos 2025
      </motion.h1>

      {/* Bloco de prêmios */}
      <motion.div
        className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 mb-8 border border-[#fcbaa1]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center text-[#fcbaa1]">
          🏆 Prêmios
        </h2>
        <p className="text-lg mb-4 text-center">Valor da rifa: R$ 10,00</p>
        <ol className="list-decimal list-inside space-y-2 text-lg [&>li]:marker:content-[counter(list-item)'\00a0\00a0']">
          <li>º prêmio: 01 bicicleta aro 29</li>
          <li>º prêmio: R$ 500,00</li>
          <li>º prêmio: Cesta Básica + Day use na Pousada Alvorada</li>
          <li>º prêmio: Curso de legislação + cento de empadas + 2 refrigerantes</li>
          <li>º prêmio: Super cesta de Natal + prêmio surpresa</li>
        </ol>
      </motion.div>

      {/* Formulário */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4 border border-[#fcbaa1] mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div>
          <label className="block text-sm font-medium mb-1">
            Número escolhido (1 a 9750):
          </label>
          <input
            type="number"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Ex: 7751"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Seu nome:</label>
          <input
            type="text"
            value={nomeComprador}
            onChange={(e) => setNomeComprador(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="Seu nome completo"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Telefone:</label>
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(formatPhone(e.target.value))}
            className="w-full border px-3 py-2 rounded"
            placeholder="(31) 99999-9999"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Endereço:</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <motion.button
          type="submit"
          className="w-full bg-[#fcbaa1] text-white py-2 px-4 rounded hover:bg-[#fca686] transition-colors"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Enviar via WhatsApp
        </motion.button>
      </motion.form>

      {/* Campo de busca */}
      <motion.input
        type="text"
        placeholder="Buscar nome..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="mb-6 w-full max-w-md border border-gray-300 rounded-2xl px-4 py-2 focus:border-[#fcbaa1] outline-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      />

      {/* Tabela */}
      <motion.div
        className="overflow-x-auto w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <table className="w-full border border-gray-400 text-center text-sm md:text-base rounded-lg overflow-hidden">
          <thead className="bg-[#fcbaa1] text-white">
            <tr>
              <th className="border border-gray-300 px-3 py-2">Bloco</th>
              <th className="border border-gray-300 px-3 py-2">Nome</th>
              <th className="border border-gray-300 px-3 py-2">
                Faixas (números)
              </th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((a) => (
              <motion.tr
                key={a.bloco}
                className={`${
                  a.whatsapp ? "hover:bg-[#fff5f2]" : "bg-gray-100 text-gray-500"
                } transition-colors`}
                whileHover={{ scale: 1.01 }}
              >
                <td className="border border-gray-300 px-3 py-2">{a.bloco}</td>
                <td className="border border-gray-300 px-3 py-2 text-left">
                  {a.nome}
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  {a.rangesText}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.p
        className="mt-8 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Sorteio em 06/12/2025 — baseado nas milhares da Loteria Federal.
      </motion.p>
    </div>
  );
}
