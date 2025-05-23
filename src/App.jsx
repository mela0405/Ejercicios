


import Curso from './Course'

function App() {
  const cursos = [
    {
      nombre: 'Desarrollo de aplicaciones Half Stack',
      id: 1,
      partes: [
        {
          nombre: 'Fundamentos de React',
          ejercicios: 10,
          id: 1
        },
        {
          nombre: 'Uso de props para pasar datos',
          ejercicios: 7,
          id: 2
        },
        {
          nombre: 'Estado de un componente',
          ejercicios: 14,
          id: 3
        },
        {
          nombre: 'Redux',
          ejercicios: 11,
          id: 4
        }
      ]
    },
    {
      nombre: 'Node.js',
      id: 2,
      partes: [
        {
          nombre: 'Ruteo',
          ejercicios: 3,
          id: 1
        },
        {
          nombre: 'Middlewares',
          ejercicios: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Currículum de desarrollo web</h1>
      {cursos.map(curso => (
        <Curso key={curso.id} curso={curso} />
      ))}
    </div>
  )
}

export default App
