import { useState } from "react";
import CampoTexto from "../../componentes/CampoTexto";
import FormDescricao from "../../componentes/FormDescricao";
import ListaSuspensaArea from "../../componentes/ListaSuspensaArea";
import styles from "./NovoVideo.module.css";
import FormBotao from "../../componentes/FormBotao";

const NovoVideo = () => {
  const [tituloPost, setTituloPost] = useState("");
  const [areaPost, setAreaPost] = useState("");
  const [imagemPost, setImagemPost] = useState("");
  const [videoPost, setVideoPost] = useState("");
  const [descricaoPost, setDescricaoPost] = useState("");

  async function novoVideoPost(area, imagem, titulo, descricao, link) {
    try {
      const videoPostApi = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          area: area,
          imagem: imagem,
          titulo: titulo,
          descricao: descricao,
          link: link
        })
      });

      if (!videoPostApi.ok) {
        throw new Error('Não foi possível adicionar novo vídeo');
      }

      const videoPostApiConvertido = await videoPostApi.json();
      return videoPostApiConvertido;
    } catch (error) {
      console.log(error);
    }
  }

  const aoGuardar = async (evento) => {
    evento.preventDefault();
    await novoVideoPost(areaPost, imagemPost, tituloPost, descricaoPost, videoPost);
    aoLimpar();
    alert("Vídeo salvo com sucesso");
  }

  const aoLimpar = () => {
    setTituloPost('');
    setAreaPost('');
    setImagemPost('');
    setVideoPost('');
    setDescricaoPost('');
  }

  const categoria = [
    "frontend",
    "backend",
    "mobile"
  ];

  return (
    <div className={styles.gContainer}>
      <section className={styles.gContainerTitulo}>
        <h1>NOVO VÍDEO</h1>
        <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
      </section>
      <section className={styles.gContainerForm}>
        <h2>Criar Card</h2>
        <form onSubmit={aoGuardar} onReset={aoLimpar}>
          <div>
            <CampoTexto
              label="Título"
              placeholder="Digite um título"
              valor={tituloPost}
              obrigatorio={true}
              aoAlterado={valor => setTituloPost(valor)}
            />

            <ListaSuspensaArea
              label="Categoria"
              itens={categoria}
              valor={areaPost}
              obrigatorio={true}
              aoAlterado={valor => setAreaPost(valor)}
            />
          </div>
          <div>
            <CampoTexto
              label="Imagem"
              placeholder="Digite o link da imagem"
              valor={imagemPost}
              obrigatorio={true}
              aoAlterado={valor => setImagemPost(valor)}
            />

            <CampoTexto
              label="Vídeo"
              placeholder="Digite o link do vídeo"
              valor={videoPost}
              obrigatorio={true}
              aoAlterado={valor => setVideoPost(valor)}
            />
          </div>
          <FormDescricao
            label="Descrição"
            placeholder="Sobre o que é esse vídeo?"
            valor={descricaoPost}
            obrigatorio={true}
            aoAlterado={valor => setDescricaoPost(valor)}
          />
          <div>
            <FormBotao type="submit" nome="guardar"></FormBotao>
            <FormBotao type="reset" nome="limpar" onClick={aoLimpar}></FormBotao>
          </div>
        </form>
      </section>
    </div>
  )
}

export default NovoVideo;
