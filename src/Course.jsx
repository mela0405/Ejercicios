
const Curso = ({ curso }) => {
  return (
    <div className="curso">
      <Encabezado nombre={curso.nombre} />
      <Contenido partes={curso.partes} />
      <Total partes={curso.partes} />
    </div>
  )
}

const Encabezado = ({ nombre }) => <h2>{nombre}</h2>

const Contenido = ({ partes }) => (
  <div>
    {partes.map(parte => (
      <Parte key={parte.id} parte={parte} />
    ))}
  </div>
)

const Parte = ({ parte }) => (
  <p>
    {parte.nombre} {parte.ejercicios}
  </p>
)

const Total = ({ partes }) => (
  <p className="total">
    <b>Total de {partes.reduce((suma, parte) => suma + parte.ejercicios, 0)} ejercicios</b>
  </p>
)

export default Curso
