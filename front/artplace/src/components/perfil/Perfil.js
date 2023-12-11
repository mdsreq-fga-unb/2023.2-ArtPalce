import React from "react";
import { Link } from "react-router-dom";
import "./Perfil.css"
import Header from "../Header/Header";
import Products from "../products/Products";
import Card from "../Card";
import produtos from "../../db/data";
import CadastroProduto from "../cadastroProduto/CadastroProduto";

function Perfil(){
  function abrirCadastroProduto(e){
    e.preventDefault();
    let modal = document.querySelector(".cadastroProduto");
    modal.style.display = "flex";
  }

    function geraProd(produtos){
        let produtosFiltrados = produtos;
        return produtosFiltrados.map(
          ({img, nome, material, descricao, preco}) => (
            <Card 
            img={img}
            nome={nome}
            material={material}
            descricao={descricao}
            preco={preco}
            />
          )
        )
      }

    const result = geraProd(produtos);
    
    return(
        <div className="perfil">
            <div>
              <Header/>
              <div className="headPerfil">
                  <div className="imagemPerfil">imgaem de perfil</div>
                  <p>telefone</p>
                  <p>e-mail</p>
                  
                  <button><Link className="linkParaAHome" to="/home">Voltar pra home</Link></button>
                  <button onClick={(e) => abrirCadastroProduto(e)}>Cadastrar Produto</button>
                  <CadastroProduto/>
                  

                  <div className="clear"></div>
              </div>
              

              <Products result={result}/>
            </div>
                
             
        </div>
    );
}

export default Perfil

