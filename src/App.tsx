import ReactFlow, { Background, Controls, Node, ConnectionMode, useEdgesState, Connection, addEdge, useNodesState, MiniMap } from 'reactflow';
import { zinc } from 'tailwindcss/colors'
import 'reactflow/dist/style.css';
import * as Toolbar from '@radix-ui/react-toolbar'

import { useCallback, useState } from 'react';
import DefaultEdge from './components/edges/DefaultEdge';
import { Circle as CircleIcon, Square as SquareIcon } from 'phosphor-react';
import { Square } from './components/nodes/Square';
import { Circle } from './components/nodes/Circle';
import { CirclePlaholder } from './components/placeholders/CirclePlaceholder';
import { SquarePlaceholder } from './components/placeholders/SquarePlaceholder';
import { Diamond } from './components/nodes/Diamond';

const NODE_TYPES = {
  square: Square,
  circle: Circle,
  diamond: Diamond
}

const EDGE_TYPES = {
  default: DefaultEdge
}

const INITIAL_NODES= [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 200,
      y: 400,
    },
    data: {

    },
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 1000,
      y: 400,
    },
    data: {

    },
  },
] satisfies Node[]

function App() {
  const [edges, setEdges, onEdgesChance] = useEdgesState([])
  const [nodes, setNodes, onNodesChance] = useNodesState(INITIAL_NODES)
  const [selectedNode, setSelectedNode] = useState('square')

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])

  function addSquareNode(type: string){
    setNodes(nodes => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type,
        position: {
          x: 600,
          y: 400,
        },
        data: {}
      }
      ])
  }

  return (
    <div className='w-screen h-screen'>
      <ReactFlow 
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}

        edges={edges}
        defaultEdgeOptions={{
          type: 'default'
        }}

        onEdgesChange={onEdgesChance}
        onConnect={onConnect}
        connectionMode={ConnectionMode.Loose}

        onNodesChange={onNodesChance}
      >
        <Background 
          gap={12}
          size={2}
          color={zinc[200]}
        />
        
        <Controls />
        <MiniMap />
      </ReactFlow>

      <Toolbar.Root className='fixed flex flex-col items-center bottom-10 left-1/2 -translate-x-1/2 w-max h-max'>
        <div className='flex items-center gap-8 bg-zinc-100 rounded-t-2xl shadow-lg border border-zinc-300 h-16 w-max overflow-hidden'>
          <div className='flex items-center h-full'>
            <button 
              onClick={() => setSelectedNode('square')}
              className={`px-3 h-full ${selectedNode == 'square' && 'bg-violet-500 text-white'}`}
            >
              <SquareIcon size={32}/>
            </button>

            <button 
              onClick={() => setSelectedNode('circle')}
              className={`px-3 h-full ${selectedNode == 'circle' && 'bg-violet-500 text-white'}`}
            >
              <CircleIcon size={32}/>
            </button>
          </div>
        </div>

        <div className='flex gap-8 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-max overflow-hidden'>
          <Toolbar.Button 
            onClick={() => addSquareNode(selectedNode)}
            className='w-32 h-32 mt-6 transition-transform hover:-translate-y-3'
          >
            {
              selectedNode == 'square'
              ? <SquarePlaceholder />
              : <CirclePlaholder />
            }
          </Toolbar.Button>
        </div>
      </Toolbar.Root>
    </div>
  )
}

export default App
