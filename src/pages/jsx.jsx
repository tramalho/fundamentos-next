export default function Jsx() {
    const titulo = <h1>Integração JS e JSX</h1>
    const subtitulo = 'Ao utilizar chaves {} é possível inserir código JS dentro do JSX';
    return (
        <div>
            {titulo}
            <h2>{subtitulo}</h2>
        </div>
    );
}