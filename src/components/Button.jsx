
import "./Button.css"

export function Button ({ children, onClick, class_name = "" }){
    return (
        <button
            class={`game-btn ${class_name}`}
            onClick={ onClick }
        > 
            { children }
        </button>
    )
}