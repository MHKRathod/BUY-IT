import {Fragment} from "react"
import ReactDom from "react-dom"
import { Backdrop } from "./Loader"


const Modal = ({ onClose, children }) => {
    return (
      <Fragment>
        {ReactDom.createPortal(
          <Fragment>
            <Backdrop onClose={onClose}></Backdrop>
            <div className="modal">
              <button className={"onClose"} onClick={onClose}>
                x
              </button>
              <div className="content">{children}</div>
            </div>
          </Fragment>,
          document.getElementById("modal-root")
        )}
      </Fragment>
    )
  }
  
  export default Modal