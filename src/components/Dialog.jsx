
import "./Dialog.css"
import { Button } from "./Button";

export function Dialog({ children, onClose }){
    return (
    <div className="overlay" onClick={onClose}>
        <div className="dialog" onClick={(e) => e.stopPropagation()}>
        { children }
        </div>
    </div>
    );
}