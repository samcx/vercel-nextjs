export default async function Ditto() {
  const ditto = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  const { species } = await ditto.json()

  return (
    <div>
      <h1>{species.name}</h1>
    </div>
  )
}
