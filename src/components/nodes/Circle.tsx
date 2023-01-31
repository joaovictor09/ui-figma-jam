import { NodeResizer } from '@reactflow/node-resizer'
import { NodeProps, Handle, Position } from 'reactflow'

import '@reactflow/node-resizer/dist/style.css';
import { ChangeEvent, useState } from 'react';
import ElementMaker from '../ElementMaker';

export function Circle({ selected, data }: NodeProps){

  const [text, setText] = useState(data.label);
  const [showInputEle, setShowInputEle] = useState(false);

  return(
    <div className='bg-violet-500 rounded-full min-w-[200px] min-h-[200px] w-full h-full flex'>
      <div className='w-full p-10 flex items-center justify-center'>
        <ElementMaker
          value={text}
          handleChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}  
          handleDoubleClick={() => setShowInputEle(true)} 
          handleBlur={() => setShowInputEle(false)}         
          showInputEle={showInputEle}
        />

      </div>

      <NodeResizer 
        minWidth={200}
        minHeight={200}
        isVisible={selected}
        lineClassName='border-blue-400'
        handleClassName='h-3 w-3 bg-white border-2 rounded border-blue-400'
      />

      <Handle 
        id="right" 
        type='source' 
        position={Position.Right}
        className='-right-5 w-3 h-3 bg-blue-400/80'
      />
      <Handle 
        id="left" 
        type='source' 
        position={Position.Left} 
        className='-left-5 w-3 h-3 bg-blue-400/80'
      />
      <Handle 
        id="top" 
        type='source' 
        position={Position.Top} 
        className='-top-5 w-3 h-3 bg-blue-400/80'
      />
      <Handle 
        id="bottom" 
        type='source' 
        position={Position.Bottom} 
        className='-bottom-5 w-3 h-3 bg-blue-400/80'
      />
    </div>
  )
}