import { Fragment, useState } from "react"
import type { Astronaut } from "./definitions/astronaut";

export function AstronautEditionModal({astronaut}: {astronaut: Astronaut}) {

  const [isOpen, setIsOpen] = useState(false);

  setTimeout(() => console.log(astronaut), 2000)
  
  return (
    <Fragment>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className={`modal ${isOpen ? 'modal-open' : 'modal-close'}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">Yay!</label>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
