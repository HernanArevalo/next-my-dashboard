import { SimplePokemon } from ".."
import { PokemonCard } from "./PokemonCard";

interface Props {
    pokemons: SimplePokemon[];
}

export const PokemonGrid = ({pokemons}: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
        { pokemons.map(pokemon =>(
            // <Image key={pokemon.id}
            // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} 
            // alt={pokemon.name} 
            // height={120}
            // width={120}
            // />
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
    ))}
    </div>
  )
}
