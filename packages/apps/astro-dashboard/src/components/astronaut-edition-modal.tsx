import {Fragment, useContext, useState} from "react"
import {Astronaut} from "@astro-lab/definitions";
import {ModalContext} from "../App";
import {useForm} from "react-hook-form";
import {createAstronaut, fetchAllAstronauts} from "../services/astronauts-service";
import {useObservableState} from "observable-hooks";
import {astronauts$} from "../stores/astronauts-store";

export function AstronautEditionModal({astronaut}: {astronaut?: Astronaut}) {

  const {isOpen, toggle} = useContext(ModalContext)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const rndInt = randomIntFromInterval(1, 6)
  console.log(rndInt)

  const onSubmit = async (astronaut: Partial<Astronaut>) => {
    await createAstronaut({...astronaut, profile_pic: `https://doodleipsum.com/100x100/avatar?shape=circle&bg=lightgray&n=${randomIntFromInterval(1, 100)}`})
    await fetchAllAstronauts().then(astronauts => astronauts$.next(astronauts))
  }

  return (
    <Fragment>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className={`modal ${isOpen ? 'modal-open' : 'modal-close'}`}>
        <div className="modal-box">

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">

              <input type="text" placeholder="First name" {...register("firstname")} className="input input-bordered input-accent w-full max-w-xs" />
              <input type="text" placeholder="Last name" {...register("lastname")} className="input input-bordered input-accent w-full max-w-xs" />
              <select className="select select-accent w-full max-w-xs" {...register("planet_id")}>
                <option disabled value="clb1kxkuu0002uoyag9qtmxtl">Select planet</option>
                <option value="clb1kxkuu0002uoyag9qtmxtl">Eleven</option>
                <option value="clb1kxkuu0000uoyar4hn1d9i">Sunev</option>
                <option value="clb1kxkuu0003uoyauwo4fm7t">Sunaru</option>
                <option value="clb1kxkuu0001uoyaoy6i6kzo">Retipuj</option>
              </select>

              <div className="modal-action">
                <input type="submit" value="Done" className="btn btn-accent" onClick={() => toggle(false)} />
              </div>

            </div>
          </form>


        </div>
      </div>
    </Fragment>
  )
}
