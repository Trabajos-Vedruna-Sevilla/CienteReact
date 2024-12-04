import '../App.css'

function Componente1 (){
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" 
                    src="https://unavatar.io/midudev" 
                    alt="avatar de midudev" 
                />
                <div className="tw-followCard-info">
                    <strong>Miguel angel duran</strong>
                    <span className="tw-followCard-infoUserName">@midudev</span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-button">
                    seguir
                </button>
            </aside>
        </article>
    )
}
export default Componente1