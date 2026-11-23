import { Link } from "react-router-dom";
 
export default function Desenvolvedor() {
  return (
    <>
        <header className="bg-[#0F172A] border-b border-[#1E293B] py-6 px-8">
            <Link to="/" className="text-[13px] text-[#64748B] m-0">
                 voltar para Home
            </Link>
            <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-4">
                <div>
                <h1 className="text-white text-[26px] font-extrabold m-0 tracking-tight">Ana Beatriz</h1>
                <p className="text-[#94A3B8] text-sm mt-1 m-0">Desenvolvedora em desenvolvimento, apaixonada na arte da computação.</p>
                </div>
            </div>
        </header>
        <main className="max-w-[1200px] w-full mx-auto py-10 px-6 flex-1 box-border">
                <section className="text-center mb-12">
                <h2 className="text-[32px] font-extrabold text-[#0F172A] mb-3 tracking-tight">
                    Ana Beatriz - Desenvolvedora Full-Stack
                </h2>
                <p className="max-w-[700px] mx-auto text-base text-[#64748B] leading-[26px]">
                    Olá! Sou Ana, uma desenvolvedora apaixonada por criar soluções inovadoras e criativas. Com experiência em diversas tecnologias, estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades.
                </p>
                </section>   

                <section className="bg-gradient-to-br from-[#2563EB] to-[#245E3B] p-8 rounded-2xl mb-10 shadow-sm border-l-6 border-[#000000]">
                    <span className="text-[#ffff] text-[15px] font-semibold block">
                            — Formação Acadêmica:
                        <ul className="text-[13px] text-[#ffff] m-0 mt-2 list-disc list-inside">
                            <li>Ensino Médio - Concluído</li>
                            <li>Graduação em Desenvolvimento de Software Multiplataforma - Cursando</li>
                        </ul>
                    </span>
                </section>


                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2E8F0] flex items-start gap-4 box-border hover:border-[#2563EB] transition-colors max-w-[600px] mx-auto">
                    <div className="bg-[#FFFF] text-[#2563EB] w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0 ">
                        🛠️
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-[#1E293B] mb-1 mt-0">Habilidades</h4>
                        <p className="text-[13px] text-[#64748B] m-0">Informações sobre as habilidades da desenvolvedora.</p>
                        <ul className="text-[13px] text-[#64748B] m-0 mt-2 list-disc list-inside">
                            <li>Desenvolvimento Web (JavaScript, Html, Css)</li>
                            <li>Desenvolvimento Backend (Node.js, Java, Python)</li>
                            <li>Banco de Dados (MySQL)</li>
                          <li>Controle de Versão (GitHub)</li>
                            <li>Metodologias Ágeis (Scrum, Kanban)</li>
                        </ul>
                    </div>
                </div>


                <section className="bg-gradient-to-br from-[#000080] to-[#9d00ff] p-8 rounded-2xl mt-10 mb-10 shadow-sm border-l-6 border-[#000000]">
                        <div className="bg-[#000000] text-white text-[11px] font-bold uppercase py-1 px-2.5 rounded-full inline-block mb-3 tracking-wider">
                            Projetos
                        </div>
                        <p className="text-lg leading-7 text-[#FFFF] italic font-medium mb-3 mt-0">
                            Meus projetos incluem aplicações web, mini jogos e exercicios para o desenvolvimento do aprendizado. Estou sempre buscando novas ideias e desafios para expandir meu portfólio e aprimorar minhas habilidades.
                        </p>
                        <span className="text-[#ffff] text-[15px] font-semibold block">
                            — Lista de Exercícios e Projetos:
                        <ul className="text-[13px] text-[#ffff] m-0 mt-2 list-disc list-inside">
                            <li>Lista de Exercícios de JavaScript</li>
                            <li>Aplicação de Videos infantojuvenil</li>
                            <li>Mini Jogo: Ping-Pong em JavaScript</li>
                        </ul>
                        </span>
                </section>

        </main>    
    </>
    );
}