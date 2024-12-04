import '../App.css'

function TwitterFollowCard ({userName = "aqui va el valor por defecto", user, isFollowing,children}){
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" 
                    src={`https://unavatar.io/${user}`} 
                    alt="avatar de midudev" 
                />
                <div className="tw-followCard-info">
                    <strong>{userName}</strong>
                    <span className="tw-followCard-infoUserName">@{user}</span>
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
export default TwitterFollowCard