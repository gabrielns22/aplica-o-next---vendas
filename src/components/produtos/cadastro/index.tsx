import { useState } from 'react'
import { Layout,Input } from 'components'

export const CadastroProdutos: React.FC = () => {

    const [ sku, setSku ] = useState('');
    const [ preco, setPreco ] = useState('');
    const [ nome, setNome ] = useState('');
    const [ descricao, setDescricao ] = useState('');

    const submit = () => {
        const produto = {
            sku, 
            preco, 
            nome, 
            descricao
        }

        console.log(produto);
    }

    interface produto{
        nome: string;
        tipo: string;
    }
    

    return (
        <Layout titulo='Cadastro de Produtos'>
            <div className="columns">
                <Input label='SKU: *' id='InputSku'   onChange={setSku} columnClasses="column" placeholder='Digite o Sku do produto' value={sku}/>
                <Input label='Preço: *' id='InputLabel' onChange={setPreco} columnClasses="column" placeholder='Digite o preço do produto' value={preco}/>
            </div>
            <Input label='Nome: *' id='InputNome'  onChange={setNome} placeholder="Digite o nome do produto"/>
            <div className="field">
                <label htmlFor="inputDesc" className="label">Descrição: *</label>
                <div className="control">
                    <textarea id="inputDesc" className="textarea" value={descricao} onChange={event => setDescricao(event.target.value)}></textarea>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link" onClick={submit}>Salvar</button>
                </div>
                <div className="control">
                    <button className="button is-link is-light">Cancelar</button>
                </div>
            </div>
        </Layout>
    )
}