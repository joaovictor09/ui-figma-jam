import { ChangeEvent } from "react";

interface ElementMakerInterface {
  showInputEle: boolean;
  value: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleBlur: () => void;
  handleDoubleClick: () => void;
}

function ElementMaker(props: ElementMakerInterface) {
  return (
    <div className="min-w-[200px] min-h-[200px] w-full h-full flex items-center justify-center p-2 break-words">
      <span className="w-full h-full font-bold text-white">
        {
          props.showInputEle ? (
            <textarea 
              value={props.value}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              autoFocus
              contentEditable='false'
              className="w-full h-full bg-transparent text-center resize-none"
            />
          ) : (
            <textarea 
              readOnly
              onDoubleClick={props.handleDoubleClick}
              contentEditable={"false"}
              
              className="w-full h-full flex items-center justify-center bg-transparent text-center outline-none resize-none"
            >
              {props.value}
            </textarea>
          )
        }
      </span>
    </div>
  );
}

export default ElementMaker;