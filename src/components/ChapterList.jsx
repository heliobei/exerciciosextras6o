import React, { useState } from "react";
import ChapterCard from "./ChapterCard";

const chapters = [
  { id: 1, title: "Qual é o meu sonho?", teacherPdf: "/assets/pdfs/Educador_Capitulo_1_6o.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_1_6o.pdf" },
  { id: 2, title: "O que você precisa comprar no mercado?", teacherPdf: "/assets/pdfs/Educador_Capitulo_2_6o.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_2_6o.pdf" },
  { id: 3, title: "As tentações do mercado... Me segura pra eu não gastar!", teacherPdf: "/assets/pdfs/Educador_Capitulo_3_6o.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_3_6o.pdf" },
  { id: 4, title: "Alcançando objetivos em família", teacherPdf: "/assets/pdfs/Educador_Capitulo_04_6o.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_04_6o.pdf" },
  { id: 5, title: "Poupando o bolso e o meio ambiente", teacherPdf: "/assets/pdfs/Educador_Capitulo_05_6o.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_05_6o.pdf" },
  
  { id: 6, title: "Dividindo balas durante a aula", teacherPdf: "/assets/pdfs/Educador_Capitulo_06_6o.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_06_6o.pdf" },
  { id: 7, title: "Cem por cento dos alunos gostam de feriados", teacherPdf: "/assets/pdfs/Educador_Capitulo_07_6o.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_07_6o.pdf" },
  { id: 8, title: "Cem por cento dos alunos gostam de feriados", teacherPdf: "/assets/pdfs/Educador_Capitulo_08_6o.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_08_6o.pdf" },
  { id: 9, title: "Cem por cento dos alunos gostam de feriados", teacherPdf: "/assets/pdfs/Educador_Capitulo_09_6o.pdf", studentPdf: "/assets/pdfs/Estudante_Capitulo_09_6o.pdf" },
  
  // ... mais capítulos  
];

const ChapterList = () => {
  const [openPdf, setOpenPdf] = useState({ id: null, type: null });

  const togglePdf = (id, type) => {
    if (openPdf.id === id && openPdf.type === type) {
      setOpenPdf({ id: null, type: null });
    } else {
      setOpenPdf({ id, type });
    }
  };

  const downloadPdf = (path) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = path.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6" id="chapter-list">
      <h1 className="text-4xl font-semibold text-center mb-4 bg-gradient-to-br from-[#766ac2] to-[#9e97ca]  text-transparent bg-clip-text">
        Biblioteca de Capítulos
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto pb-4">
        Explore os capítulos abaixo e visualize / baixe os conteúdos do Caderno do Educador ou do Livro do Estudante.
      </p>

      {chapters.map((chapter) => (
        <ChapterCard
          key={chapter.id}
          chapter={chapter}
          openPdf={openPdf}
          togglePdf={togglePdf}
          downloadPdf={downloadPdf}
        />
      ))}
    </div>
  );
};

export default ChapterList;
