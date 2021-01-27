import { FC, useRef, useState } from "react";
import { Transition } from "react-transition-group";

const duration = 3000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 0.5 },
  entered: { opacity: 1 },
  exiting: { opacity: 0.5 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 }
};

const TransitionExample: FC = () => {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null)

  return (
    <div>
      <div>
        <Transition in={inProp} timeout={duration} nodeRef={nodeRef} mountOnEnter={true} unmountOnExit={true}>
          {state => {
            // console.log(state)
            return (
              <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }} ref={nodeRef}>
                I'm a fade Transition!
              </div>
            )
          }}
        </Transition>
      </div>

      <div style={{marginTop: '20px'}}>
        <button onClick={() => setInProp(!inProp)}>toggle</button>
      </div>
    </div>);
};

export default TransitionExample